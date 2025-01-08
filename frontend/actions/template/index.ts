import api from "@/config/api";
import ENV from "@/config/ENV";
import { Template } from "@/provider/store/useTemplateStore";
import toast from "react-hot-toast";

const createTemplate = async (data: Template) => {
  try {
    const res = await api.post(ENV.TEMPLATES_API_URL as string, data);
    if (res.status === 201) {
      toast.success("Template created successfully");
      return res.data;
    }
  } catch (error) {
    toast.error("Failed to create template");
    return new Error("Failed to create template");
  }
};

export { createTemplate };
