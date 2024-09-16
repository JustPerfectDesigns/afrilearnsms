// _auth/forms/SigninForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { SigninValidation } from "@/lib/validation";
import { toast } from "sonner";

import { AxiosError } from "axios";
import { useAuthStore, useSchoolIDStore } from "@/store/authStore";

const SigninForm = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const { setSchoolId } = useSchoolIDStore();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    try {
      const response = await axios.post(
        "https://afrilearn-api-staging.up.railway.app/v1/auth/user/login",
        {
          email: values.email,
          password: values.password,
        }
      );

      console.log("Login successful:", response.data);

      toast("Login successful!", {
        description: "You're welcome back!",
        position: "top-right",
      });

      // Save the token in local storage or state management (e.g., Redux)
      // localStorage.setItem("accessToken", response.data.data.accessToken);
      const accessToken = response.data.data.accessToken;

      // Store the token and schoolId in Zustand
      setToken(accessToken);
      setSchoolId(response?.data?.data?.user._id);

      // Redirect the user to the dashboard or homepage
      navigate("/");
    } catch (error: unknown) {
      const errorAxios = error as AxiosError;
      const errorMessage = (errorAxios.response?.data as { message: string })
        ?.message;
      console.error("Signin failed:", error);
      toast("Oops! Signin failed", {
        description: errorMessage || "Unknown error",
        position: "top-right",
        className: "!text-red-500 before:bg-red-500",
      });
    }

    // catch (error) {
    //   console.error("Login failed:", error);
    //   // Handle the error, such as displaying an error message
    // }
  }

  return (
    <div className="pt-28">
      <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[27rem] bg-white rounded-[20px] p-5 mb-20"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`w-full mt-2 ${
              form.formState.isSubmitting
                ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                : "bg-[#0AAC6C] hover:bg-[#32b883]"
            }`}
          >
            {form.formState.isSubmitting ? "Logging in..." : "Login"}
          </Button>

          <Link
            className="text-sm text-[#0B1A2D] font-medium text-center block mt-6 mb-8"
            to="/forgot-password"
          >
            Forgot password
          </Link>

          <p className="text-sm text-[#0B1A2D] font-medium text-center mt-6">
            Don’t have account?{" "}
            <Link className="text-[#0AAC6C]" to="/sign-up">
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};
export default SigninForm;
