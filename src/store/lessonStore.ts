// lessonStore.ts
import create from "zustand";

interface Lesson {
  _id: string;
  name: string;
  topics: Topic[];
}

interface Topic {
  _id: string;
  name: string;
}

interface LessonStore {
  lessons: Lesson[];
  setLesson: (lessons: Lesson[]) => void;
  getLesson: () => Lesson[];
}

const useLessonStore = create<LessonStore>()((set, get) => ({
  lessons: [] as Lesson[], // initialize lessons with an empty array
  setLesson: (lessons: Lesson[]) => set({ lessons }),
  getLesson: () => get().lessons,
}));

export default useLessonStore;
