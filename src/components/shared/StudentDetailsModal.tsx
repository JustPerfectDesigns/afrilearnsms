import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
// import EditUserProfileModal from "./EditUserProfileModal";
import EditUserProfileSchoolTeacherModal from "./EditUserProfileSchoolTeacherModal";

interface ClassId {
  name: string;
}

interface Student {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  phone: string;
  phone2: string;
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
}

interface EditStudentDetailsModalProps {
  trigger: React.ReactNode;
  student: Student;
}

const StudentDetailsModal: React.FC<EditStudentDetailsModalProps> = ({
  trigger,
  student,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[95vw]">
        <SheetHeader>
          <SheetTitle>Student’s record detail</SheetTitle>
          <ScrollArea className="h-[90vh]">
            <SheetDescription>
              <div className="flex items-center justify-end mb-6 w-full">
                <div className="flex items-center gap-4">
                  <EditUserProfileSchoolTeacherModal
                    trigger={
                      <Button className="bg-white text-black hover:bg-white hover:border hover:border-[#0AAC6C] flex justify-center items-center gap-1 h-9">
                        <img
                          src="/assets/icons/pen-icon.svg"
                          alt="Pen Icon"
                          className="w-4"
                        />
                        Edit
                      </Button>
                    }
                    student={student}
                  />
                  <Button className="bg-white text-black hover:bg-white hover:border hover:border-[#0AAC6C] flex justify-center items-center gap-1 h-9">
                    <img
                      src="/assets/icons/dots.svg"
                      alt="Dots Icon"
                      className="w-4"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white py-5 px-4 rounded">
                <div className="card-ui w-2/4 !p-0 flex items-center gap-2 border-none rounded-none">
                  <div className="rounded-full w-20 overflow-hidden object-cover">
                    <img
                      src={
                        student?.image || "/assets/images/placeholder-user.png"
                      }
                      alt="Student's Photo"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start items-center gap-3 w-fit">
                      <span className="block text-[#75819A] text-xs font-medium uppercase w-full">
                        {student._id}
                      </span>
                      <span className="block uppercase text-[#0B1A2D] text-[10px] bg-[#CEEEE2] px-2 rounded-sm font-bold">
                        present
                      </span>
                    </div>
                    <div>
                      <p className="text-[#374258] font-semibold text-lg">
                        {student.firstname} {student.lastname}
                      </p>
                      <span className="text-[#374258] text-xs capitalize">
                        {student.classId?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-5 mb-2">Student’s information</p>
              <div className="bg-white py-5 px-4 rounded ">
                <span className="block text-[#374258] font-bold mb-4">
                  Personal
                </span>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block text-xs text-[#75819A]">Name</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.firstname} {student.lastname}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#75819A]">Email</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white py-5 px-4 rounded mt-2">
                <span className="block text-[#374258] font-bold mb-4">
                  Contact
                </span>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block text-xs text-[#75819A]">Phone</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.phone}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#75819A]">
                      Address
                    </span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.address}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-5 mb-2">Guardian’s information</p>
              <div className="bg-white py-5 px-4 rounded">
                <span className="block text-[#374258] font-bold mb-4">
                  Personal
                </span>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block text-xs text-[#75819A]">Name</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.guardianName}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#75819A]">Phone</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {student.guardianPhone}
                    </span>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default StudentDetailsModal;
