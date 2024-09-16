import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export const SERVER = axios.create({
  baseURL: "https://afrilearn-api-staging.up.railway.app/v1",
});

SERVER.interceptors.request.use(
  async (config) => {
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
