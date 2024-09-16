import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ClassLevel } from "@/components/types/classes";

// Define types for the store
interface ClassStoreState {
  classes: ClassLevel[];
  subjects: { _id: string; name: string; defaultImage: string }[];
  lessons: any[];
  selectedGroupId: string;
  selectedClassId: string;
  selectedSubjectId: string;
  setClasses: (classes: ClassLevel[]) => void;
  setSubjects: (
    subjects: { _id: string; name: string; defaultImage: string }[]
  ) => void;
  setLessons: (lessons: any[]) => void;
  setSelectedGroupId: (groupId: string) => void;
  setSelectedClassId: (classId: string) => void;
  setSelectedSubjectId: (subjectId: string) => void;
}

// Zustand store with persistence
export const useClassStore = create<ClassStoreState>()(
  persist(
    (set) => ({
      classes: [],
      subjects: [],
      lessons: [],
      selectedGroupId: "",
      selectedClassId: "",
      selectedSubjectId: "",
      setClasses: (classes) => set({ classes }),
      setSubjects: (subjects) => set({ subjects }),
      setLessons: (lessons) => set({ lessons }),
      setSelectedGroupId: (groupId) => set({ selectedGroupId: groupId }),
      setSelectedClassId: (classId) => set({ selectedClassId: classId }),
      setSelectedSubjectId: (subjectId: string) =>
        set({ selectedSubjectId: subjectId }),
    }),
    {
      name: "class-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
