export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

interface ClassId {
  name: string;
}

interface Student {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  school_name: string;
  country: string;
  state: string;
  lga: string;
  street: string;
  avatar: string;
  image: string;
  _id: string;
  classId: ClassId;
  guardianName: string;
  guardianPhone: string;
  name: string;
  classes: string;
}

interface Teacher {
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
  _id?: string;
  classId?: ClassId;
  guardianName?: string;
  guardianPhone?: string;
  name?: string;
  classes?: string;
}

export type StudentOrTeacher = Student | Teacher;
