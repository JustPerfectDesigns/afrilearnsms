// types/lesson.ts
export interface Lesson {
  _id: string;
  classId: {
    _id: string;
    name: string;
    groupId: string;
    alias: string;
    __v: number;
  };
  subjectId: {
    _id: string;
    name: string;
    groupId: string;
    imageUrl: string;
    introText: string;
    classification: string;
    __v: number;
  };
  termId: {
    _id: string;
    name: string;
    __v: number;
  };
  title: string;
  file: string;
  content: string;
  flag: boolean;
  likes: number;
  views: number;
  videoUrls: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface LessonsResponse {
  status: string;
  data: Lesson[];
}
