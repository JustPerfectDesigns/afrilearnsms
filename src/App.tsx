import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import {
  Classes,
  Home,
  Lessons,
  Students,
  Subjects,
  Teachers,
} from "./_root/pages";
import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import NewStudents from "./components/shared/NewStudents";
import LessonDetails from "./components/shared/LessonDetails";
import AuthGuard from "./components/shared/AuthGuard";
import TopicNotes from "./components/shared/TopicNotes";
import TopicDetails from "./components/shared/TopicDetails";
import VerifyOtpForm from "./_auth/forms/VerifyOtpForm";
import AuthRedirectGuard from "./components/shared/AuthRedirectGuard";
import TeacherSignupForm from "./_auth/forms/TeacherSignupForm";
import StudentSignupForm from "./_auth/forms/StudentSignupForm";
// import LessonProvider from "./lessonProvider";
// import LessonProvider from "./LessonProvider";

const App = () => {
  return (
    <main className="">
      {/* <LessonProvider> */}
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthRedirectGuard />}>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/teacher-sign-up" element={<TeacherSignupForm />} />
            <Route path="/student-sign-up" element={<StudentSignupForm />} />
            <Route path="/verify-account" element={<VerifyOtpForm />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<AuthGuard />}>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="new-students" element={<NewStudents />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="classes" element={<Classes />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:lessonId" element={<LessonDetails />} />
            <Route
              path="/lessons/:lessonId/:topicId"
              element={<TopicDetails />}
            />
          </Route>
        </Route>
      </Routes>
      {/* </LessonProvider> */}
    </main>
  );
};
export default App;
