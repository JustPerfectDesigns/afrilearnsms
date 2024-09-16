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

// const EditUserProfileModal = ({ trigger, student }) => {
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
//           <SheetTitle>Edit User Profile</SheetTitle>
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

// export default EditUserProfileModal;

// import { useState } from "react";
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

// const EditUserProfileModal = ({ trigger, student }) => {
//   const { user, fetchUser, editUserProfile } = useUserStore();
//   const { token } = useAuthStore();
//   const [formData, setFormData] = useState({
//     firstname: student.firstname,
//     lastname: student.lastname,
//     email: student.email,
//     phone: student.phone,
//     address: student.address,
//     school_name: student.school_name,
//     // Add other fields as necessary
//   });

//   useEffect(() => {
//     if (token) {
//       fetchUser();
//     }
//   }, [token, fetchUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await editUserProfile(formData);
//   };

//   return (
//     <Sheet>
//       <SheetTrigger asChild>{trigger}</SheetTrigger>
//       <SheetContent className="sm:max-w-xl w-[95vw]">
//         <SheetHeader>
//           <SheetTitle>Edit Profile</SheetTitle>
//           <ScrollArea className="h-[90vh]">
//             <SheetDescription>
//               <form onSubmit={handleSubmit}>
//                 {/* Form content goes here */}
//                 <div className="bg-white py-5 px-4 rounded">
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstname"
//                       value={formData.firstname}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastname"
//                       value={formData.lastname}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       Phone
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-xs text-[#75819A]">
//                       School Name
//                     </label>
//                     <input
//                       type="text"
//                       name="school_name"
//                       value={formData.school_name}
//                       onChange={handleChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                     />
//                   </div>
//                   {/* Add other fields as necessary */}
//                   <div className="flex justify-end">
//                     <Button
//                       type="submit"
//                       className="bg-green-500 text-white px-4 py-2 rounded"
//                     >
//                       Save Changes
//                     </Button>
//                   </div>
//                 </div>
//               </form>
//             </SheetDescription>
//           </ScrollArea>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default EditUserProfileModal;

// import { useState, useEffect } from "react";
// import {
//   Sheet,
//   SheetClose,
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
// import ChangePasswordModal from "./ChangePasswordModal";

// const EditUserProfileModal = ({ trigger, student }) => {
//   const { user, fetchUser, editUserProfile, updateProfileImage } =
//     useUserStore();
//   const { token } = useAuthStore();
//   const [formData, setFormData] = useState({
//     firstname: student.firstname,
//     lastname: student.lastname,
//     gender: student.gender,
//     email: student.email,
//     phone: student.phone,
//     phone2: student.phone2,
//     address: student.address,
//     school_name: student.school_name,
//     country: student.country,
//     state: student.state,
//     lga: student.lga,
//     street: student.street,
//     // Add other fields as necessary
//   });
//   const [profileImage, setProfileImage] = useState<File | null>(null);
//   const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for Change Password Modal

//   useEffect(() => {
//     if (token) {
//       fetchUser();
//     }
//   }, [token, fetchUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await editUserProfile(formData);
//     if (profileImage) {
//       await updateProfileImage(profileImage);
//     }
//   };

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Sheet,
  SheetClose,
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
import ChangePasswordModal from "./ChangePasswordModal";

// Define types for the student and trigger props
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
}

interface EditUserProfileModalProps {
  trigger: React.ReactNode;
  student: Student;
}

const EditUserProfileModal: React.FC<EditUserProfileModalProps> = ({
  trigger,
  student,
}) => {
  const { user, fetchUser, editUserProfile, updateProfileImage } =
    useUserStore();
  const { token } = useAuthStore();
  const [formData, setFormData] = useState<Student>({
    firstname: student.firstname,
    lastname: student.lastname,
    gender: student.gender,
    email: student.email,
    phone: student.phone,
    phone2: student.phone2,
    address: student.address,
    school_name: student.school_name,
    country: student.country,
    state: student.state,
    lga: student.lga,
    street: student.street,
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token, fetchUser]);

  // Event handler for input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for file input change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProfileImage(file);
  };

  // Event handler for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editUserProfile(formData);
    if (profileImage) {
      await updateProfileImage(profileImage);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[95vw]">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <ScrollArea className="h-[90vh]">
            <SheetDescription>
              <form onSubmit={handleSubmit}>
                {/* Add other fields as necessary */}
                <div className="flex justify-end gap-3 mb-6 mt-4 mr-2">
                  <Button
                    type="button"
                    className="h-9"
                    onClick={() => setIsChangePasswordOpen(true)}
                  >
                    Change Password
                  </Button>
                  <SheetClose>
                    <Button
                      variant={"outline"}
                      type="button"
                      className="h-9 flex justify-center items-center gap-1"
                    >
                      <img
                        src="/assets/icons/close-icon.svg"
                        alt="Close Icon"
                        className="w-5"
                      />
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button
                    type="submit"
                    className="h-9 flex justify-center items-center gap-2 bg-[#0AAC6C] hover:bg-[#2a9268]"
                  >
                    <img
                      src="/assets/icons/check-icon.svg"
                      alt="Close Icon"
                      className="w-[0.9rem]"
                    />
                    Save
                  </Button>
                </div>

                {/* Form content goes here */}
                <div className="mr-2">
                  <div className="mb-4 bg-white px-4 pt-4 pb-8 rounded-lg">
                    <span className="block text-[#374258] font-semibold">
                      {user?.usertype === "school" ? "Logo" : "Profile Image"}
                    </span>
                    <img
                      src={user?.avatar}
                      alt="User avatar"
                      className="w-20 mx-auto"
                    />
                    <div className="custom-file-upload">
                      <input
                        type="file"
                        id="fileInput"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="opacity-0 z-[5] cursor-pointer mx-auto"
                      />
                      <Button variant="outline" className="absolute h-9">
                        <img
                          src="/assets/icons/pencil-icon.svg"
                          alt="pencil icon"
                          className="w-4"
                        />
                        Change Image
                      </Button>
                    </div>
                  </div>
                  {user?.usertype === "school" ? (
                    <div className="mb-4 bg-white px-4 pt-2 pb-5 rounded-lg">
                      <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                        School Name
                      </label>
                      <input
                        type="text"
                        name="school_name"
                        value={formData.school_name}
                        onChange={handleChange}
                        className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 bg-white px-4 pt-4 pb-5 rounded-lg">
                      <span className="block text-[#374258] font-semibold">
                        Personal info
                      </span>
                      <div className="flex justify-center items-center gap-4 w-full">
                        <div className="w-full">
                          <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                          />
                        </div>
                        <div className="w-full">
                          <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                          />
                        </div>
                      </div>
                      <div className="w-full mt-5">
                        <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                        >
                          <option value="" disabled>
                            Select gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 bg-white px-4 pt-4 pb-5 rounded-lg">
                    <span className="block text-[#374258] font-semibold">
                      Contact information
                    </span>
                    <div className="flex justify-center items-center gap-4 w-full">
                      <div className="w-full">
                        <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                          Phone 1
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                        />
                      </div>
                      <div className="w-full">
                        <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                          Phone 2
                        </label>
                        <input
                          type="text"
                          name="phone2"
                          value={formData.phone2}
                          onChange={handleChange}
                          placeholder="Ex. 08012345678"
                          className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-5">
                      <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex. example@example.com"
                        className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-4 bg-white px-4 pt-4 pb-5 rounded-lg">
                    <span className="block text-[#374258] font-semibold">
                      Address
                    </span>
                    <div className="flex justify-center items-center gap-4 w-full">
                      <div className="w-full mt-5">
                        <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                        >
                          <option value="" disabled>
                            Select country
                          </option>
                          <option value="nigeria">Nigeria</option>
                          <option value="ghana">Ghana</option>
                          <option value="south-africa">South Africa</option>
                        </select>
                      </div>
                      <div className="w-full mt-5">
                        <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                          State
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                        >
                          <option value="" disabled>
                            Select state
                          </option>
                          <option value="Lagos">Lagos</option>
                          <option value="Abuja">Abuja</option>
                          <option value="Abia">Abia</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full mt-5">
                      <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                        Area/province
                      </label>
                      <select
                        name="lga"
                        value={formData.lga}
                        onChange={handleChange}
                        className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                      >
                        <option value="" disabled>
                          Select lga
                        </option>
                        <option value="surulere">Surulere</option>
                        <option value="ikeja">Ikeja</option>
                        <option value="apapa">Apapa</option>
                        <option value="ajeromi">Ajeromi</option>
                      </select>
                    </div>
                    <div className="w-full mt-5">
                      <label className="text-slate-500 text-xs capitalize mb-2 mt-4 block">
                        Street
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Ex. No. 2 Broadway Street, Lekki Phase 2, Lekki Lagos."
                        className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal w-full"
                      />
                    </div>
                  </div>

                  {/* Add other fields as necessary */}
                  {/* <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => setIsChangePasswordOpen(true)}
                    >
                      Change Password
                    </Button>
                    <Button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Save Changes
                    </Button>
                  </div> */}
                </div>
              </form>
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />
    </Sheet>
  );
};

export default EditUserProfileModal;
