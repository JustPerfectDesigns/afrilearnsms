// StudentDetailsModal.tsx
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
import EditUserProfileSchoolTeacherModal from "./EditUserProfileSchoolTeacherModal";

interface ClassId {
  name: string;
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

interface EditTeacherDetailsModalProps {
  trigger: React.ReactNode;
  teacher: Teacher;
}

// const StudentDetailsModal = ({ trigger }: { trigger: React.ReactNode }) => {
const TeacherDetailsModal: React.FC<EditTeacherDetailsModalProps> = ({
  trigger,
  teacher,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[95vw]">
        <SheetHeader>
          <SheetTitle>Teacher’s record detail</SheetTitle>
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
                    student={teacher}
                  />

                  <Button className="bg-white text-black hover:bg-white hover:border hover:border-[#0AAC6C] flex justify-center items-center gap-1 h-9">
                    <img
                      src="/assets/icons/dots.svg"
                      alt="Pen Icon"
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
                        teacher?.avatar || "/assets/images/placeholder-user.png"
                      }
                      alt="Teacher's Photo"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start items-center gap-3 w-fit">
                      <span className="block text-[#75819A] text-xs font-medium uppercase w-full">
                        {teacher?._id}
                      </span>
                      <span className="block uppercase text-[#0B1A2D] text-[10px] bg-[#CEEEE2] px-2 rounded-sm font-bold">
                        present
                      </span>
                    </div>

                    <div>
                      <p className="text-[#374258] font-semibold text-xl">
                        {teacher?.firstname} {teacher?.lastname}
                      </p>
                      {/* <span className="text-[#374258] text-xs">Primary 2</span> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <p className="font-semibold mt-5 mb-2">Student’s information</p> */}
              <div className="bg-white py-5 px-4 rounded mt-5">
                <span className="block text-[#374258] font-bold mb-4">
                  Personal information
                </span>

                <div className="">
                  <div>
                    {/* <span className="block text-xs text-[#75819A]">Name</span> */}
                    {/* <span className="block text-[#374258] font-semibold mb-4">
                      Kayode Otumba
                    </span> */}
                  </div>
                  <div>
                    <span className="block text-xs text-[#75819A]">Email</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {teacher?.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white py-5 px-4 rounded mt-5">
                <span className="block text-[#374258] font-bold mb-4">
                  Contact information
                </span>

                <div className="flex items-center gap-8">
                  <div>
                    <span className="block text-xs text-[#75819A]">Phone</span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {teacher?.phone}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#75819A]">
                      Address
                    </span>
                    <span className="block text-[#374258] font-semibold mb-4">
                      {teacher?.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* <p className="font-semibold mt-5 mb-2">Guardian’s information</p> */}
              <div className="bg-white py-5 px-4 rounded mt-5">
                <div className="flex justify-between items-center">
                  <span className="block text-[#374258] font-bold">
                    Classes
                    {/* <span className="text-[#B2BBCE] font-semibold">0</span> */}
                  </span>
                  <Button
                    className="flex justify-center items-center gap-2 text-[#0AAC6C] hover:text-[#0AAC6C]"
                    variant={"ghost"}
                  >
                    <img
                      src="/assets/icons/green-plus-icon.svg"
                      alt="Add Class Icon"
                      className="w-4"
                    />
                    Add class
                  </Button>
                </div>
                <div>
                  <span className="border rounded-lg py-1.5 px-4 text-[#191C2D] font-semibold mt-2 inline-block">
                    {teacher?.classId?.name}
                  </span>
                </div>
              </div>

              <div className="bg-white py-5 px-4 rounded mt-5">
                <div className="flex justify-between items-center">
                  <span className="block text-[#374258] font-bold">
                    Subjects
                    {/* <span className="text-[#B2BBCE] font-semibold">0</span> */}
                  </span>
                  <Button
                    className="flex justify-center items-center gap-2 text-[#0AAC6C] hover:text-[#0AAC6C]"
                    variant={"ghost"}
                  >
                    <img
                      src="/assets/icons/green-plus-icon.svg"
                      alt="Add Class Icon"
                      className="w-4"
                    />
                    Add subject
                  </Button>
                </div>
                <div>
                  <span className="border rounded-lg py-1.5 px-4 text-[#191C2D] font-semibold mt-2 inline-block">
                    {/* {teacher?.classId?.name} */}
                    Subject
                  </span>
                </div>
              </div>
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default TeacherDetailsModal;
