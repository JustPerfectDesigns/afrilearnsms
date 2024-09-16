// _auth/forms/SignupForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { AxiosError } from "axios";
// import { useAuthStore } from "@/store/authStore";

// const FormSchema = z.object({
//   type: z.enum(["all", "mentions", "none"], {
//     required_error: "You need to select a notification type.",
//   }),
// })

const SignupForm = () => {
  const navigate = useNavigate();
  // const setToken = useAuthStore((state) => state.setToken);

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      fullName: "",
      schoolName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    try {
      const response = await axios.post(
        "https://afrilearn-api-staging.up.railway.app/v1/auth/user/signup",
        {
          firstname: values.fullName.split(" ")[0],
          lastname: values.fullName.split(" ")[1],
          email: values.email,
          password: values.password,
          usertype: "school", // or any other usertype if applicable, all options are teacher, learner, and school
          school_category: values.schoolCategory,
          school_name: values.schoolName,
          // Add other required fields here
        }
      );

      console.log("Signup successful:", response.data);

      if (response.data.status === "success") {
        toast("Signup was successful!", {
          description: "Please paste in code sent to your email address",
          position: "top-right",
        });
        const userId = response.data.data._id; // Accessing the _id
        // const accessToken = response.data.data.accessToken; // Assuming the token is returned in the response

        // Store the token in Zustand
        // setToken(accessToken);

        navigate("/verify-account", { state: { userId } });
      }
    } catch (error: unknown) {
      const errorAxios = error as AxiosError;
      const errorMessage = (errorAxios.response?.data as { message: string })
        ?.message;
      console.error("Signup failed:", error);
      toast("Oops! Signup failed", {
        description: errorMessage || "Unknown error",
        position: "top-right",
        className: "!text-red-500 before:bg-red-500",
      });
    }

    // catch (error: Error) {
    //   console.error("Signup failed:", error);
    //   toast("Something went wrong", {
    //     description: error.message,
    //     position: "top-right",
    //   });
    // }
  }

  return (
    <div className="pt-28">
      <h1 className="text-2xl font-semibold text-center mb-5">Sign up</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[27rem] bg-white rounded-[20px] p-5 mb-20"
        >
          <FormField
            control={form.control}
            name="schoolCategory"
            render={({ field }) => (
              <FormItem className="space-y-2 mb-4">
                <FormLabel className="text-slate-500 text-xs mb-4 capitalize block">
                  Select school category
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="primary"
                          className="border-[#989CAD] border-2"
                        />
                      </FormControl>
                      <FormLabel className="font-medium text-slate-600">
                        Primary
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="secondary"
                          className="border-[#989CAD] border-2"
                        />
                      </FormControl>
                      <FormLabel className="font-medium text-slate-600">
                        Secondary
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Full name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
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
            name="schoolName"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  School name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of your school"
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
                  Create Password
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Confirm password
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
            {form.formState.isSubmitting ? "Signing up..." : "Sign up"}
          </Button>

          <p className="text-sm text-[#0B1A2D] font-medium text-center mt-6 mb-8">
            By signing up, you agree to our{" "}
            <Link className="underline" to="/terms">
              Terms
            </Link>{" "}
            and{" "}
            <Link className="underline" to="/privacy-policy">
              Privacy policies
            </Link>
          </p>

          <p className="text-sm text-[#0B1A2D] font-medium text-center mt-6">
            Already have account?{" "}
            <Link className="text-[#0AAC6C]" to="/sign-in">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};
export default SignupForm;
