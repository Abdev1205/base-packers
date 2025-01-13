import TemplateAction from "@/actions/template";
import processTemplateData from "@/lib/processTemplateData";
import { SkillTagtype, TemplateApiRes, TemplateCardDataType } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { data } from "framer-motion/client";
import React from "react";
import toast from "react-hot-toast";

const useTemplate = () => {
  const { user, isLoaded } = useUser();

  const {
    data: templateData,
    isLoading: templateLoading,
    refetch: refetchTemp,
  } = useQuery({
    queryKey: ["template"],
    queryFn: TemplateAction.getTemplate,
  });

  const templateStarMutation = useMutation({
    mutationFn: (variables: { id: string; userId: string }) =>
      TemplateAction.starTemplate(variables.id, variables.userId),
    onSuccess: (data) => {
      toast.success(data.message || "Template starred successfully");
      refetchTemp();
    },
    onError: (error) => {
      toast.error("Failed to star template");
    },
  });

  const refetchTemplate = () => {
    // we want that all the data should load then only we will refecth so using timeout
    setTimeout(() => {
      refetchTemp();
    }, 1000);
  };

  if (!isLoaded) {
    return {
      templateData: [],
      templateLoading: true,
      templateCardData: [],
      handleStarTemplate: () => {},
      refetchTemplate: () => {},
    };
  }

  const templateCardData: TemplateCardDataType[] = processTemplateData({
    data: templateData,
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
    handleStarTemplate,
    refetchTemplate,
  };
};

export default useTemplate;
