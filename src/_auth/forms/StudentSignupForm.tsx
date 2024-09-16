import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { StudentSignupValidation } from "@/lib/validation";
import { z } from "zod";
// import CopyToClipboardButton from "@/components/shared/CopyToClipboardButton";
import { toast } from "sonner";
// import { useSchoolIDStore } from "@/store/authStore";
import { fetchClasses } from "@/components/endpoints/api";

// const FormSchema = z.object({
//   type: z.enum(["all", "mentions", "none"], {
//     required_error: "You need to select a notification type.",
//   }),
// })

const StudentSignupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const classId = searchParams.get("classId");
  const schoolId = searchParams.get("schoolId");

  const [selectedClass, setSelectedClass] = useState("");
  const [classes, setClasses] = useState<any>([]);
  const [selectedName, setSelectedName] = useState<string>("");

  // const { schoolId } = useSchoolIDStore();

  useEffect(() => {
    (async () => {
      const getClasses = await fetchClasses();
      setClasses(getClasses);
      console.log(getClasses, "GET CLASSES NEW");
    })();
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof StudentSignupValidation>>({
    resolver: zodResolver(StudentSignupValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      password: "",
      confirmPassword: "",
      classId: classId || "",
      schoolId: schoolId || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof StudentSignupValidation>) {
    try {
      const response = await axios.post(
        "https://afrilearn-api-staging.up.railway.app/v1/auth/user/signup",
        {
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          gender: values.gender,
          password: values.password,
          usertype: "learner",
          classId: values.classId,
          schoolId: values.schoolId,
        }
      );

      console.log("Signup successful:", response.data);

      if (response.data.status === "success") {
        toast("Signup was successful!", {
          description: "Please paste in code sent to your email address",
          position: "top-right",
        });
        const userId = response.data.data._id;
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
  }

  return (
    <div className="pt-28">
      <h1 className="text-2xl font-semibold text-center mb-5">
        Student Sign up
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[27rem] bg-white rounded-[20px] p-5 mb-20"
          key={"teacher-form"}
        >
          {/* <div>
            <CopyToClipboardButton
              textToCopy="https://example.com"
              buttonText="Click to share sign up link"
            />
          </div> */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  First name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
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
            name="lastName"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Last name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
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
            name="gender"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Gender
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      // onValueChange={field.onChange}
                      // defaultValue={field.value}
                      className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                      // {...field}
                    >
                      <SelectValue placeholder="Select Your Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="classId"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-slate-500 text-xs capitalize -mb-2 block">
                  Select Class
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      setSelectedClass(value);
                      form.setValue("classId", value);
                    }}
                    value={selectedClass}
                  >
                    <SelectTrigger className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal">
                      <SelectValue placeholder="Select a Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {classes !== ""
                          ? classes.map((classItem, index) => (
                              <SelectItem
                                key={String(index)}
                                value={classItem._id}
                              >
                                {classItem.name}
                              </SelectItem>
                            ))
                          : null}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
                    placeholder="Confirm password"
                    className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Include hidden inputs for classId and schoolId */}
          <input type="hidden" {...form.register("classId")} />
          <input type="hidden" {...form.register("schoolId")} />

          <Button
            type="submit"
            variant="secondary"
            className="w-full text-white bg-[#0BC279] hover:bg-[#1ca870]"
          >
            Sign up
          </Button>

          <div className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-[#0BC279]">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default StudentSignupForm;
