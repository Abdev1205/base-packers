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

  static async getUserProfile(username: string) {
    try {
      if (!username) {
        toast.error("Username is required");
        return;
      }
      const res = await api.get(`${ENV.USER_API_URL}/profile/${username}`);
      return res.data.data;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    }
  }

  static async updateUserProfile(data: {
    username: string;
    name: string;
    about: string;
  }) {
    try {
      if (!data?.username) {
        toast.error("Username is required");
        return;
      }
      const res = await api.put(
        `${ENV.USER_API_URL}/profile/${data?.username}`,
        data
      );
      return res.data.data;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    }
  }
}

export default UserAction;
