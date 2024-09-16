import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./authStore";
import { useClassStore } from "./classStore"; // Import your class store

interface Teacher {
  _id: string;
  firstname: string;
  lastname: string;
  gender: string;
  subjects: string;
  classes: string;
  attendance: string;
  imageUrl: string;
  classId: string;
  name: string;
}

interface TeacherStore {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
  fetchTeachers: (page: number, limit: number) => Promise<void>;
}

export const useTeacherStore = create<TeacherStore>((set) => ({
  teachers: [],
  loading: false,
  error: null,
  fetchTeachers: async (page: number, limit: number) => {
    const { token } = useAuthStore.getState();
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/users/teachers`,
        {
          params: { page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set({ teachers: response.data.data.user, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch teachers", loading: false });
    }
  },
}));

export const useTeacherStoreForClasses = create<TeacherStore>((set) => ({
  teachers: [],
  loading: false,
  error: null,
  fetchTeachers: async (page: number, limit: number) => {
    const { token } = useAuthStore.getState();
    const { selectedClassId } = useClassStore.getState();
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/users/teachers`,
        {
          params: { classId: selectedClassId, page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set({ teachers: response.data.data.user, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch teachers", loading: false });
    }
  },
}));
