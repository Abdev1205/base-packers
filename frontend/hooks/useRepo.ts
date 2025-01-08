import { getAllRepo } from "@/actions/repo";
import { useRepoStore } from "@/provider/store/useRepoStore";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const useRepo = (token: string, isLoaded: boolean) => {
  const { addRepos, gitRepo } = useRepoStore();

  const {
    data: repo,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["repo", token],
    queryFn: async () => {
      const fetchedRepo = await getAllRepo(token);
      addRepos(fetchedRepo?.data || []);
      return fetchedRepo;
    },
    initialData: gitRepo.length > 0 ? { data: gitRepo } : undefined, // Prefill with Zustand data
    staleTime: 1000 * 60 * 15, // Data is considered fresh for 5 minutes
    enabled: !!token && isLoaded,
  });

  return { repo: repo?.data || gitRepo, error, isLoading };
};

export default useRepo;
