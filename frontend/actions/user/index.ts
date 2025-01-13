import api from "@/config/api";
import ENV from "@/config/ENV";
import toast from "react-hot-toast";

class UserAction {
  static async getUserById(id: string) {
    try {
      if (!id) {
        toast.error("User id is required");
        return;
      }
      const res = await api.get(`${ENV.USER_API_URL}/${id}`);
      return res.data.data;
    } catch (error: any) {
      toast.error(error.message);
    }
  }
}

export default UserAction;
