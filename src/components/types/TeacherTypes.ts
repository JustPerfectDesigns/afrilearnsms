// src/types/TeacherTypes.ts
export interface ClassId {
  name: string;
}

export interface Teacher {
  _id: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  email?: string;
  phone?: string;
  phone2?: string;
  address?: string;
  school_name?: string;
  country?: string;
  state?: string;
  lga?: string;
  street?: string;
  avatar?: string;
  image?: string;
  classId?: ClassId; // Ensure this matches your expected type
  guardianName?: string;
  guardianPhone?: string;
  name?: string;
  classes?: string; // Adjust this type according to your data
}
