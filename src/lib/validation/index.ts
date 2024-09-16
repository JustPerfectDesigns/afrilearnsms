import { z } from "zod";

export const SignupValidation = z.object({
  schoolCategory: z.enum(["primary", "secondary"], {
    required_error: "You need to select school category.",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  schoolName: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password doesn't match" }),
});

export const TeacherSignupValidation = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password doesn't match" }),
  classId: z.string().nonempty("Class ID is required"),
  schoolId: z.string().nonempty("School ID is required"),
});

export const StudentSignupValidation = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email(),
  gender: z.string({ message: "Please choose your gender" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password doesn't match" }),
  classId: z.string().nonempty("Class ID is required"),
  schoolId: z.string().nonempty("School ID is required"),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
