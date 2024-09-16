import axios from "axios";
import { ClassGroup, ClassLevel } from "../types/classes";
import { useAuthStore } from "@/store/authStore";

// Fetch class groups
export const fetchClassGroups = async (): Promise<ClassGroup[]> => {
  try {
    const response = await axios.get(
      "https://afrilearn-api-staging.up.railway.app/v1/classes/groups"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching class groups:", error);
    throw new Error("Failed to fetch class groups");
  }
};

// Fetch classes
export const fetchClasses = async (): Promise<ClassLevel[]> => {
  try {
    const response = await axios.get(
      "https://afrilearn-api-staging.up.railway.app/v1/classes"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw new Error("Failed to fetch classes");
  }
};

export const fetchLessonsForClass = async (
  classId: string
): Promise<Lesson[]> => {
  const { token } = useAuthStore.getState();

  if (!token) {
    throw new Error("No token found in auth store");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      `https://afrilearn-api-staging.up.railway.app/v1/lessons/byclass?classId=${classId}`,
      { headers }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw new Error("Failed to fetch lessons");
  }
};
