import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const AuthRedirectGuard = () => {
  const { token } = useAuthStore();

  return token === null ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRedirectGuard;
