import TemplateAction from "@/actions/template";
import processTemplateData from "@/lib/processTemplateData";
import { SkillTagtype, TemplateApiRes, TemplateCardDataType } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { data } from "framer-motion/client";
import React from "react";
import toast from "react-hot-toast";

const useTemplate = ({
  userId = null,
  userName = null,
}: {
  userId?: string | null;
  userName?: string | null;
} = {}) => {
  const { user, isLoaded } = useUser();

  const {
    data: templateData,
    isLoading: templateLoading,
    refetch: refetchTemp,
  } = useQuery({
    queryKey: ["template"],
    queryFn: TemplateAction.getTemplate,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const templateStarMutation = useMutation({
    mutationFn: (variables: { id: string; userId: string }) =>
      TemplateAction.starTemplate(variables.id, variables.userId),
    onSuccess: (data) => {
      toast.success(data.message || "Template starred successfully");
      refetchTemp();
      refetchTempByUsername();
    },
    onError: (error) => {
      toast.error("Failed to star template");
    },
  });

  const {
    data: templateDataByUsername,
    isLoading: isTemplateUserDataLoading,
    refetch: refetchTempByUsername,
  } = useQuery({
    queryKey: ["templateByUsername"],
    queryFn: async () => {
      const data = await TemplateAction.getTemplateByUserId(userName as string);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const refetchTemplate = () => {
    // we want that all the data should load then only we will refecth so using timeout
    setTimeout(() => {
      refetchTemp();
    }, 100);
  };
  const refetchTemplateByUsername = () => {
    refetchTempByUsername();
  };

  if (!isLoaded) {
    return {
      templateData: [],
      templateLoading: true,
      templateCardData: [],
      templateCardDataByUsername: [],
      handleStarTemplate: () => {},
      refetchTemplate: () => {},
      refetchTemplateByUsername,
    };
  }

  const templateCardData: TemplateCardDataType[] = processTemplateData({
    data: templateData,
    userId: user?.id || "",
  });

  const templateCardDataByUsername: TemplateCardDataType[] =
    processTemplateData({
      data: templateDataByUsername,
      userId: user?.id || "",
    });

  const handleStarTemplate = (id: string) => {
    if (!user?.id) {
      toast.error("Please login to star a template");
      return;
    }

    // Pass an object with `id` and `userId`
    templateStarMutation.mutate({
      id,
      userId: user.id,
    });
  };

  return {
    templateData,
    templateLoading,
    templateCardData,
    templateCardDataByUsername,
    handleStarTemplate,
    refetchTemplate,
    refetchTemplateByUsername,
  };
};

export default useTemplate;
