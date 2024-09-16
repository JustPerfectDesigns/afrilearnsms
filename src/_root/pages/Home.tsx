import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  const { token } = useAuthStore();

  useEffect(() => {
    // Fetch data from the dashboard endpoint
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://afrilearn-api-staging.up.railway.app/v1/users/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          }
        );
        if (response.data && response.data.data) {
          setStudentCount(response.data.data.students);
          setTeacherCount(response.data.data.teachers);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <img
          src="/assets/icons/dashboard2.svg"
          alt="Dashboard Icon"
          className="w-7"
        />
        <h1 className="text-[#374258] text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="mt-9">
        <p className="font-medium mb-2">Students and Teachers</p>
        <div className="flex items-center gap-2">
          <div className="card-ui">
            <span className="block text-[#374258] text-sm font-medium">
              Total students
            </span>
            <span className="mt-2 flex justify-end text-[#BE6195] text-xl font-semibold">
              {loading ? (
                <LoadingSpinner className="animate-spin h-5 w-5 mt-2 text-[#0AAC6C]" />
              ) : (
                studentCount
              )}
            </span>
          </div>
          <div className="card-ui">
            <span className="block text-[#374258] text-sm font-medium">
              Total teachers
            </span>
            <span className="mt-2 flex justify-end text-[#BE6195] text-xl font-semibold">
              {loading ? (
                <LoadingSpinner className="animate-spin h-5 w-5 mt-2 text-[#0AAC6C]" />
              ) : (
                teacherCount
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
