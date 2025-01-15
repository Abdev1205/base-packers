"use client";

import api from "@/config/api";
import ENV from "@/config/ENV";
import toast from "react-hot-toast";

const getAllSkillTags = async () => {
  try {
    const res = await api.get(ENV.SKILL_API_URL as string);
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch skill tags");
    return null;
  }
};

export { getAllSkillTags };
