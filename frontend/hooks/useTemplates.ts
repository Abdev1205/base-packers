import TemplateAction from "@/actions/template";
import processTemplateData from "@/lib/processTemplateData";
import { TemplateCardDataType } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useTemplate = ({
  userId = null,
  userName = null,
}: {
  userId?: string | null;
  userName?: string | null;
} = {}) => {
  const { user, isLoaded } = useUser();

  // Fetch template data
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

  // Fetch template data by username
  const {
    data: templateDataByUsername,
    isLoading: isTemplateUserDataLoading,
    refetch: refetchTemplateByUsername,
  } = useQuery({
    queryKey: ["templateByUsername"],
    queryFn: async () => {
      const data = await TemplateAction.getTemplateByUserId(userName as string);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: false, // Enable query only if `userName` is provided
  });

  // Template star mutation
  const templateStarMutation = useMutation({
    mutationFn: (variables: { id: string; userId: string }) =>
      TemplateAction.starTemplate(variables.id, variables.userId),
    onSuccess: (data) => {
      toast.success(data.message || "Template starred successfully");
      refetchTemp();
      refetchTemplateByUsername();
    },
    onError: () => {
      toast.error("Failed to star template");
    },
  });

  const refetchTemplate = () => {
    setTimeout(() => {
      refetchTemp();
    }, 100);
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

  // Process data for templates created and starred
  const templateCreatedByUsername: TemplateCardDataType[] =
    templateDataByUsername?.templatesCreated?.length
      ? processTemplateData({
          data: templateDataByUsername.templatesCreated,
          userId: user?.id || "",
        })
      : [];

  const templateStarredByUsername: TemplateCardDataType[] =
    templateDataByUsername?.templateStarred?.length
      ? processTemplateData({
          data: templateDataByUsername.templateStarred,
          userId: user?.id || "",
        })
      : [];

  const templateCardData: TemplateCardDataType[] = processTemplateData({
    data: templateData,
    userId: user?.id || "",
  });

  const handleStarTemplate = (id: string) => {
    if (!user?.id) {
      toast.error("Please login to star a template");
      return;
    }
    templateStarMutation.mutate({ id, userId: user.id });
  };

  return {
    templateData,
    templateLoading,
    templateCardData,
    templateCreatedByUsername,
    templateStarredByUsername,
    handleStarTemplate,
    refetchTemplate,
    refetchTemplateByUsername,
  };
};

export default useTemplate;
