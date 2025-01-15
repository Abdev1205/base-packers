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
      toast.error("Failed to create template");
      return null;
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
      return null;
    }
  }

  static async getTemplate() {
    try {
      const url = window.location;
      const query = url?.href?.split("?")[1];

      let qUrl = "";
      if (query) {
        qUrl = `?${query}`;
      }

      const res = await api.get((ENV.TEMPLATES_API_URL + `${qUrl}`) as string);
      return res.data.data;
    } catch (error) {
      toast.error("Failed to fetch templates");
      return null;
    }
  }

  static async getTemplateById(id: string) {
    try {
      const res = await api.get(`${ENV.TEMPLATES_API_URL as string}/${id}`);
      return res.data.data;
    } catch (error) {
      toast.error("Failed to fetch template");
      return null;
    }
  }

  static async getTemplateByUserId(id: string) {
    try {
      const res = await api.get(
        `${ENV.TEMPLATES_API_URL as string}/user/${id}`
      );
      return res.data;
    } catch (error) {
      toast.error("Failed to fetch template");
      return null;
    }
  }
}

export default TemplateAction;
