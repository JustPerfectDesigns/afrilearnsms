import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const AuthGuard = () => {
  const { token } = useAuthStore();

  return token !== null ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthGuard;
