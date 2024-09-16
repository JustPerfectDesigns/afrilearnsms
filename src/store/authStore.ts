// store/authStore.ts

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage", // Name of the item in local storage
      storage: createJSONStorage(() => localStorage), // Specify storage as local storage
    }
  )
);

interface ISchoolStore {
  schoolId: string;
  setSchoolId: (schoolId: string) => void;
  clearSchoolId: () => void;
}

export const useSchoolIDStore = create<ISchoolStore>()(
  persist(
    (set) => ({
      schoolId: "",
      setSchoolId: (schoolId: string) => set({ schoolId }),
      clearSchoolId: () => set({ schoolId: "" }),
    }),
    {
      name: "school-id-storage", // Name of the item in local storage
      storage: createJSONStorage(() => localStorage), // Specify storage as local storage
    }
  )
);
