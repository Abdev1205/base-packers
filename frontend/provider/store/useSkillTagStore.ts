"use client";

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// Define the SkillTag type
type SkillTag = {
  id: number;
  name: string;
  tagValue: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

// Define the store type
export type SkillTagStore = {
  skillTags: SkillTag[];
  setSkillTags: (tags: SkillTag[]) => void;
  getAllSkillTags: () => SkillTag[];
};

// Zustand store creation
export const useSkillTagStore = create<SkillTagStore>()(
  devtools(
    persist(
      (set, get) => ({
        skillTags: [],
        setSkillTags: (tags: SkillTag[]) => set({ skillTags: tags }),
        getAllSkillTags: () => get().skillTags,
      }),
      {
        name: "skillTagStore", // unique name
        storage: createJSONStorage(() => localStorage), // specify the storage type
      }
    )
  )
);
