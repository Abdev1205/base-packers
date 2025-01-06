import { getAllSkillTags } from "@/actions/skills";
import { useSkillTagStore } from "@/provider/store/useSkillTagStore";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const useSkillTags = () => {
  const { skillTags, setSkillTags } = useSkillTagStore();
  const {
    data: skillTagsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["skillTags"],
    queryFn: getAllSkillTags,
    enabled: skillTags.length === 0,
  });

  useEffect(() => {
    if (skillTagsData?.data) {
      setSkillTags(skillTagsData?.data);
    }
  }, [skillTagsData, setSkillTags]);

  return { skillTags, isLoading, isError, error };
};

export default useSkillTags;
