import api from "@/config/api";
import ENV from "@/config/ENV";
import { Template } from "@/provider/store/useTemplateStore";
import toast from "react-hot-toast";

class TemplateAction {
  static async createTemplate(data: Template) {
    try {
      const res = await api.post(ENV.TEMPLATES_API_URL as string, data);
      return res.data;
    } catch (error) {
      return new Error("Failed to create template");
    }
  }

  static async starTemplate(id: string, userId: string) {
    try {
      const res = await api.post(
        `${ENV.TEMPLATES_API_URL as string}/${id}/star`,
        { userId }
      );
      return res.data;
    } catch (error) {
      toast.error("Failed to star template");
      return new Error("Failed to star template");
    }
  }

  static async getTemplate() {
    try {
      const url = window.location;
      const query = url?.href?.split("?")[1];

      const res = await api.get(
        (ENV.TEMPLATES_API_URL + `?${query}`) as string
      );
      return res.data.data;
    } catch (error) {
      return new Error("Failed to fetch templates");
    }
  }

  static async getTemplateById(id: string) {
    try {
      const res = await api.get(`${ENV.TEMPLATES_API_URL as string}/${id}`);
      return res.data.data;
    } catch (error) {
      return new Error("Failed to fetch template");
    }
  }
}

export default TemplateAction;
