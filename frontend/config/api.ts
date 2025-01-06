import axios from "axios";
import ENV from "./ENV";

const api = axios.create({
  baseURL: ENV.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

export default api;
