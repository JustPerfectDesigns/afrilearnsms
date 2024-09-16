// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { ScrollArea } from "../ui/scroll-area";
// import { Button } from "../ui/button";
// import { useUserStore } from "@/store/userStore";
// import { useAuthStore } from "@/store/authStore";
// import { useEffect } from "react";

// const UserProfileModal = ({ trigger, student }) => {
//   const { user, fetchUser } = useUserStore();
//   const { token } = useAuthStore();

//   useEffect(() => {
//     if (token) {
//       fetchUser();
//     }
//   }, [token, fetchUser]);

//   return (
//     <Sheet>
//       <SheetTrigger asChild>{trigger}</SheetTrigger>
//       <SheetContent className="sm:max-w-xl w-[95vw]">
//         <SheetHeader>
//           <SheetTitle>Profile</SheetTitle>
//           <ScrollArea className="h-[90vh]">
//             <SheetDescription>
//               {/* Profile content goes here */}
//               <div className="flex items-center justify-end mb-6 w-full">
//                 <div className="flex items-center gap-4">
//                   <Button className="bg-white text-black hover:bg-white hover:border hover:border-[#0AAC6C] flex justify-center items-center gap-1 h-9">
//                     <img
//                       src="/assets/icons/pen-icon.svg"
//                       alt="Pen Icon"
//                       className="w-4"
//                     />
//                     Edit
//                   </Button>
//                   <Button className="bg-white text-black hover:bg-white hover:border hover:border-[#0AAC6C] flex justify-center items-center gap-1 h-9">
//                     <img
//                       src="/assets/icons/dots.svg"
//                       alt="Dots Icon"
//                       className="w-4"
//                     />
//                   </Button>
//                 </div>
//               </div>
//               <div className="bg-white py-5 px-4 rounded">
//                 <div className="card-ui w-2/4 !p-0 flex items-center justify-center gap-2 border-none rounded-none">
//                   <div className="rounded-full w-20 overflow-hidden object-cover">
//                     {user?.usertype === "school" ? (
//                       <img
//                         src={
//                           student?.avatar ||
//                           "/assets/images/school-placeholder.png"
//                         }
//                         alt="Profile Photo"
//                         className="w-full"
//                       />
//                     ) : (
//                       <img
//                         src={
//                           student?.avatar ||
//                           "/assets/images/placeholder-user.png"
//                         }
//                         alt="Profile Photo"
//                         className="w-full"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//               {/* <p className="font-semibold mt-5 mb-2">Personal Information</p> */}
//               <div className="bg-white py-5 px-4 rounded mt-4">
//                 <span className="block text-[#374258] font-bold mb-4">
//                   Personal
//                 </span>
//                 {user?.usertype === "school" ? (
//                   <div className="flex items-center gap-8">
//                     <div>
//                       <span className="block text-xs text-[#75819A]">Name</span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.school_name}
//                       </span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-8">
//                     <div>
//                       <span className="block text-xs text-[#75819A]">Name</span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.firstname} {student.lastname}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Email
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.email}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               {user?.usertype === "school" ? (
//                 <div className="bg-white py-5 px-4 rounded mt-4">
//                   <span className="block text-[#374258] font-bold mb-4">
//                     Contact
//                   </span>
//                   <div className="flex items-center flex-wrap gap-8">
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Phone
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.phone}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Email
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.email}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Address
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.address}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="bg-white py-5 px-4 rounded mt-4">
//                   <span className="block text-[#374258] font-bold mb-4">
//                     Contact
//                   </span>
//                   <div className="flex items-center gap-8">
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Phone
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.phone}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="block text-xs text-[#75819A]">
//                         Address
//                       </span>
//                       <span className="block text-[#374258] font-semibold mb-4">
//                         {student.address}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </SheetDescription>
//           </ScrollArea>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default UserProfileModal;

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
import { useUserStore } from "@/store/userStore";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import EditUserProfileModal from "./EditUserProfileModal";

const UserProfileModal = ({ trigger, student }) => {
  const { user, fetchUser } = useUserStore();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token, fetchUser]);

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[95vw]">
        <SheetHeader>
          <SheetTitle>User Profile</SheetTitle>
          <ScrollArea className="h-[90vh]">
            <SheetDescription>
              {/* Profile content goes here */}
              <div className="flex items-center justify-end mb-6 w-full">
                <div className="flex items-center gap-4">
                  <EditUserProfileModal
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
                <div className="card-ui w-2/4 !p-0 flex items-center justify-center gap-2 border-none rounded-none">
                  <div className="rounded-full w-20 overflow-hidden object-cover">
                    {user?.usertype === "school" ? (
                      <img
                        src={
                          student?.avatar ||
                          "/assets/images/school-placeholder.png"
                        }
                        alt="Profile Photo"
                        className="w-full"
                      />
                    ) : (
                      <img
                        src={
                          student?.avatar ||
                          "/assets/images/placeholder-user.png"
                        }
                        alt="Profile Photo"
                        className="w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* <p className="font-semibold mt-5 mb-2">Personal Information</p> */}
              <div className="bg-white py-5 px-4 rounded mt-4">
                <span className="block text-[#374258] font-bold mb-4">
                  Personal
                </span>
                {user?.usertype === "school" ? (
                  <div className="flex items-center gap-8">
                    <div>
                      <span className="block text-xs text-[#75819A]">Name</span>
                      <span className="block text-[#374258] font-semibold mb-4">
                        {student.school_name}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-8">
                    <div>
                      <span className="block text-xs text-[#75819A]">Name</span>
                      <span className="block text-[#374258] font-semibold mb-4">
                        {student.firstname} {student.lastname}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-[#75819A]">
                        Email
                      </span>
                      <span className="block text-[#374258] font-semibold mb-4">
                        {student.email}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {user?.usertype === "school" ? (
                <div className="bg-white py-5 px-4 rounded mt-4">
                  <span className="block text-[#374258] font-bold mb-4">
                    Contact
                  </span>
                  <div className="flex items-center flex-wrap gap-8">
                    <div>
                      <span className="block text-xs text-[#75819A]">
                        Phone
                      </span>
                      <span className="block text-[#374258] font-semibold mb-4">
                        {student.phone}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-[#75819A]">
                        Email
                      </span>
                      <span className="block text-[#374258] font-semibold mb-4">
                        {student.email}
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
              ) : (
                <div className="bg-white py-5 px-4 rounded mt-4">
                  <span className="block text-[#374258] font-bold mb-4">
                    Contact
                  </span>
                  <div className="flex items-center gap-8">
                    <div>
                      <span className="block text-xs text-[#75819A]">
                        Phone
                      </span>
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
              )}
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UserProfileModal;
