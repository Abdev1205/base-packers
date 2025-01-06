"use client";

import api from "@/config/api";
import ENV from "@/config/ENV";

const getAllSkillTags = async () => {
  try {
    const res = await api.get(ENV.SKILL_API_URL as string);
    return res.data;
  } catch (error) {
    return new Error("Failed to fetch skill tags");
  }
};

export { getAllSkillTags };
