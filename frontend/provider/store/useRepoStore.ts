import { GitRepo } from "@/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type useRepoStoreType = {
  gitRepo: GitRepo[];
  addRepos: (newRepos: GitRepo[]) => void;
};

export const useRepoStore = create<useRepoStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        gitRepo: [],

        addRepos: (repo: GitRepo[]) => {
          set({ gitRepo: repo });
        },
      }),
      {
        name: "RepoStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
