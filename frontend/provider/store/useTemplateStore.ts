import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { SkillTagtype, GitRepo } from "@/types";

export type Template = {
  id: string;
  name: string;
  description: string;
  guidelines?: string;
  tags: SkillTagtype[];
  repo: GitRepo | null;
  createdById: string;
};

export type TemplateStore = {
  template: Template | null;
  setTemplate: (template: Omit<Template, "id">) => void;
  updateTemplate: (partialTemplate: Partial<Omit<Template, "id">>) => void;
  clearTemplate: () => void;
};

export const useTemplateStore = create<TemplateStore>()(
  devtools(
    persist(
      (set, get) => ({
        template: null,
        setTemplate: (template) => {
          const id = uuidv4();
          set({ template: { ...template, id } });
        },
        updateTemplate: (partialTemplate) => {
          set((state) => ({
            template: { ...state.template, ...partialTemplate },
          }));
        },
        clearTemplate: () => set({ template: null }),
      }),
      {
        name: "templateStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
