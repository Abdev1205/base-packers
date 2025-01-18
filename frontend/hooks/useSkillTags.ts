import { getAllSkillTags } from "@/actions/skills";
import { useSkillTagStore } from "@/provider/store/useSkillTagStore";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const useSkillTags = () => {
  const { skillTags, setSkillTags } = useSkillTagStore();

  // Fetch skill tags with React Query
  const {
    data: skillTagsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["skillTags"],
    queryFn: getAllSkillTags,
    initialData: skillTags?.length > 0 ? skillTags : undefined, // Prefill with Zustand data
    enabled: skillTags.length === 0, // Fetch only if Zustand store is empty
    staleTime: 1000 * 60 * 15, // Data is fresh for 15 minutes
  });

  // Synchronize fetched data to Zustand store
  useEffect(() => {
    if (skillTagsData?.data) {
      setSkillTags(skillTagsData.data);
    }
  }, [skillTagsData, setSkillTags]);

  return { skillTags, isLoading, isError, error };
};

export default useSkillTags;
