// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useLocation } from "react-router-dom";

// // Define validation schema
// const OtpValidation = z.object({
//   userId: z.string().nonempty("User ID is required"),
//   otp: z.string().min(6, "OTP must be 6 characters").max(6),
// });

// type OtpFormValues = z.infer<typeof OtpValidation>;

// const VerifyOtpForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const form = useForm<OtpFormValues>({
//     resolver: zodResolver(OtpValidation),
//     defaultValues: {
//       userId: "", // This should be set dynamically when navigating to this page
//       otp: "",
//     },
//   });

//   const userId = location.state?.userId || "";
//   form.setValue("userId", userId);

//   const onSubmit = async (values: OtpFormValues) => {
//     try {
//       const response = await axios.post(
//         "https://afrilearn-api-staging.up.railway.app/v1/auth/user/verify",
//         values
//       );

//       if (response.data.status === "success") {
//         console.log("OTP Verification successful:", response.data);
//         navigate("/sign-in", { replace: true });
//       } else {
//         console.error("Verification failed:", response.data);
//       }
//     } catch (error) {
//       console.error("Verification failed:", error);
//     }
//   };

//   return (
//     <div className="pt-28">
//       <h1 className="text-2xl font-semibold text-center mb-5">
//         Verify Your Account
//       </h1>

//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-[27rem] bg-white rounded-[20px] p-5 mb-20"
//         >
//           <FormField
//             control={form.control}
//             name="userId"
//             render={({ field }) => (
//               <FormItem className="my-4">
//                 <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
//                   {/* User ID */}
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     type="hidden"
//                     placeholder="Enter User ID"
//                     className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="otp"
//             render={({ field }) => (
//               <FormItem className="my-4">
//                 <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
//                   OTP
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     type="text"
//                     placeholder="Enter OTP"
//                     className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className="w-full mt-2 bg-[#0AAC6C] hover:bg-[#32b883]"
//           >
//             Verify
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default VerifyOtpForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Define validation schema
const OtpValidation = z.object({
  userId: z.string().nonempty("User ID is required"),
  otp: z.string().min(6, "OTP must be 6 characters").max(6),
});

type OtpFormValues = z.infer<typeof OtpValidation>;

const VerifyOtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(false);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(OtpValidation),
    defaultValues: {
      userId: "", // This should be set dynamically when navigating to this page
      otp: "",
    },
  });

  const userId = location.state?.userId || "";
  form.setValue("userId", userId);

  const onSubmit = async (values: OtpFormValues) => {
    try {
      const response = await axios.post(
        "https://afrilearn-api-staging.up.railway.app/v1/auth/user/verify",
        values
      );

      if (response.data.status === "success") {
        console.log("OTP Verification successful:", response.data);
        toast("OTP verification successful!", {
          description: "Please sign in to get started.",
          position: "top-right",
        });
        navigate("/sign-in", { replace: true });
      } else {
        console.error("Verification failed:", response.data);
      }
    } catch (error: unknown) {
      const errorAxios = error as AxiosError;
      const errorMessage = (errorAxios.response?.data as { message: string })
        ?.message;
      console.error("Oops! Verification failed:", error);
      toast(errorMessage || "Unknown error", {
        description:
          "Please copy and paste the right code from your email or click resend to get another one.",
        position: "top-right",
        className: "!text-red-500 before:bg-red-500",
      });
      setError(true);
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isResendingOtp, setIsResendingOtp] = useState(false);

  useEffect(() => {
    if (isTimerRunning) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining, isTimerRunning]);

  const handleResendOtp = async () => {
    if (isResendingOtp) return;

    setIsResendingOtp(true);

    try {
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/auth/user/resend-otp?reason=VERIFY`,
        {
          params: {
            userId,
          },
        }
      );

      if (response.data.status === "success") {
        console.log("OTP resent successfully:", response.data);
        toast("OTP resent successfully!", {
          description: "Please copy and past the code sent to your email.",
          position: "top-right",
        });
        setIsTimerRunning(true);
        setTimeRemaining(60);
      } else {
        console.error("Error resending OTP:", response.data);
      }
    } catch (error: unknown) {
      // const errorAxios = error as AxiosError;
      // const errorMessage = (errorAxios.response?.data as { message: string })
      //   ?.message;
      console.error("Oops! Error re-sending OTP:", error);
      toast("Oops! Error re-sending OTP", {
        description: "It seems like something went wrong, please try again",
        position: "top-right",
        className: "!text-red-500 before:bg-red-500",
      });
    } finally {
      setIsResendingOtp(false);
    }
  };

  return (
    <div className="pt-28">
      <h1 className="text-2xl font-semibold text-center mb-5">
        Verify Your Account
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[27rem] bg-white rounded-[20px] p-5 mb-20"
        >
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  {/* User ID */}
                </FormLabel>
                <FormControl>
                  <Input
                    type="hidden"
                    placeholder="Enter User ID"
                    className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  OTP
                </FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot
                        index={0}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      <InputOTPSlot
                        index={1}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      <InputOTPSlot
                        index={2}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot
                        index={3}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      <InputOTPSlot
                        index={4}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      <InputOTPSlot
                        index={5}
                        className={`border rounded-md h-12 w-12 ${
                          error ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-center pt-2" />
              </FormItem>
            )}
          />

          <div className="text-center mb-5">
            {timeRemaining > 0 ? (
              <p className="text-sm font-semibold">
                Re-send code in{" "}
                <span className="inline-block text-red-500">
                  0:{timeRemaining}
                </span>
              </p>
            ) : (
              <p>
                Didn't get a code?{" "}
                <Button
                  variant="link"
                  className="h-0 p-0 text-[#0AAC6C]"
                  type="button"
                  onClick={handleResendOtp}
                >
                  Click to resend
                </Button>
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`w-full mt-2 ${
              form.formState.isSubmitting
                ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                : "bg-[#0AAC6C] hover:bg-[#32b883]"
            }`}
          >
            {form.formState.isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default VerifyOtpForm;
