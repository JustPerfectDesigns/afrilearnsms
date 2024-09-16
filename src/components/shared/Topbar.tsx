import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import DropdownButton from "./DropdownButton";
import { useState, useEffect } from "react";
import { useAuthStore, useSchoolIDStore } from "@/store/authStore";
import UserProfileModal from "./UserProfileModal";
import { useUserStore } from "@/store/userStore";
import LoadingSpinner from "./LoadingSpinner";

const createNew = [
  {
    name: "Assessment",
    icon: "/assets/icons/assessment-icon.svg",
  },
  {
    name: "Lesson",
    icon: "/assets/icons/lesson-btn-icon.svg",
  },
  {
    name: "Class",
    icon: "/assets/icons/class-btn-icon.svg",
  },
];

const TopBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const clearToken = useAuthStore((state) => state.clearToken);
  const clearSchoolId = useSchoolIDStore((state) => state.clearSchoolId);
  const { user, loading, fetchUser, userFetched } = useUserStore();
  const { token } = useAuthStore();

  const onLogout = () => {
    clearToken();
    clearSchoolId();
    navigate("/sign-in");
  };

  useEffect(() => {
    if (token && !userFetched) {
      fetchUser();
    }
  }, [token, fetchUser, userFetched]);

  const profile = [
    {
      name: "Profile",
      icon: "/assets/icons/profile-btn-icon.svg",
      onButtonClick: () => {},
    },
    {
      name: "Logout",
      icon: "/assets/icons/logout-btn-icon.svg",
      onButtonClick: onLogout,
    },
  ];

  return (
    <div className="topbar w-full">
      <nav className="flex justify-between items-center  mr-[270px]">
        <div className="flex justify-start items-center gap-2">
          <img
            src={user?.avatar || "/assets/images/school-placeholder.png"}
            alt="Profile Image"
            className="w-12"
          />
          <span className="font-semibold">{user?.school_name}</span>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-black relative">
            <img
              src="/assets/icons/bell-icon.svg"
              alt="Bell Icon"
              className="w-6"
            />
            <div className="absolute top-[2px] left-3 bg-[#E12E2E] w-[22px] h-[16px] flex justify-center items-center font-medium text-white text-xs rounded-full">
              12
            </div>
          </div>
          <div className="ml-2">
            <DropdownButton
              buttonText={"Create new"}
              lists={createNew}
              className={"right-0 top-[4rem]"}
            />
          </div>
          <div className="relative flex flex-col items-start w-fit rounded-lg">
            {loading ? (
              <LoadingSpinner className="animate-spin h-10 w-10 text-[#0AAC6C]" />
            ) : (
              <Button
                type={"button"}
                variant={"ghost"}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-2 hover:bg-transparent"
              >
                <div className="rounded-full overflow-hidden">
                  {user?.usertype === "school" ? (
                    <img
                      src={
                        user?.avatar || "/assets/images/school-placeholder.png"
                      }
                      alt="Profile Image"
                      className="w-12"
                    />
                  ) : (
                    <img
                      src={
                        user?.avatar || "/assets/images/placeholder-user.png"
                      }
                      alt="Profile Image"
                      className="w-10"
                    />
                  )}
                </div>

                <div>
                  {!isOpen ? (
                    <img
                      src="/assets/icons/angle-down.svg"
                      alt="Angle Down Arrow"
                    />
                  ) : (
                    <img
                      src="/assets/icons/angle-down.svg"
                      alt="Angle Down Arrow"
                      className="rotate-180"
                    />
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <span className="block text-[#0B1A2D] font-medium text-sm">
                    {user?.usertype === "school" ? (
                      <p>{user?.school_name}</p>
                    ) : (
                      <p>
                        {user?.firstname} {user?.lastname}
                      </p>
                    )}
                  </span>
                  <span className="block text-[#B2BBCE] text-xs mt-[2px] capitalize">
                    {user?.usertype}
                  </span>
                </div>
              </Button>
            )}

            {isOpen && (
              <div
                className={`bg-white shadow-sm py-4 px-2 absolute top-[4rem] right-2.5 flex flex-col rounded-lg w-[240px]`}
              >
                {profile.map((list, index) => (
                  <UserProfileModal
                    key={index}
                    student={user}
                    trigger={
                      <div
                        className="flex w-full justify-between pr-4 items-center gap-4 hover:bg-slate-100 cursor-pointer rounded-lg"
                        onClick={
                          list.name === "Logout" ? onLogout : list.onButtonClick
                        }
                      >
                        <div className="flex items-center gap-3 py-3 pl-2.5">
                          <img src={list.icon} alt="" className="w-5" />
                          <span className="text-[#5B5B5B] font-semibold">
                            {list.name}
                          </span>
                        </div>
                        <ChevronRight />
                      </div>
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;

// import { useNavigate } from "react-router-dom";
// import { ChevronRight } from "lucide-react";
// import { Button } from "../ui/button";
// import DropdownButton from "./DropdownButton";
// import { useState, useEffect } from "react";
// import { useAuthStore, useSchoolIDStore } from "@/store/authStore";
// import UserProfileModal from "./UserProfileModal";
// import { useUserStore } from "@/store/userStore";
// import LoadingSpinner from "./LoadingSpinner";

// const createNew = [
//   {
//     name: "Assessment",
//     icon: "/assets/icons/assessment-icon.svg",
//   },
//   {
//     name: "Lesson",
//     icon: "/assets/icons/lesson-btn-icon.svg",
//   },
//   {
//     name: "Class",
//     icon: "/assets/icons/class-btn-icon.svg",
//   },
// ];

// const TopBar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const navigate = useNavigate();
//   const clearToken = useAuthStore((state) => state.clearToken);
//   const clearSchoolId = useSchoolIDStore((state) => state.clearSchoolId);
//   const { user, loading, fetchUser, userFetched } = useUserStore();
//   const { token } = useAuthStore();

//   const onLogout = () => {
//     clearToken();
//     clearSchoolId();
//     navigate("/sign-in");
//   };

//   useEffect(() => {
//     if (token && !userFetched) {
//       fetchUser();
//     }
//   }, [token, fetchUser, userFetched]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if ((event.target as HTMLElement).closest(".profile-panel") === null) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const profile = [
//     {
//       name: "Profile",
//       icon: "/assets/icons/profile-btn-icon.svg",
//       onButtonClick: () => {}, // Close panel on profile click
//     },
//     {
//       name: "Logout",
//       icon: "/assets/icons/logout-btn-icon.svg",
//       onButtonClick: onLogout,
//     },
//   ];

//   return (
//     <div className="topbar w-full">
//       <nav className="flex justify-between items-center  mr-[270px]">
//         <div className="flex justify-start items-center gap-2">
//           <img
//             src={user?.avatar || "/assets/images/school-placeholder.png"}
//             alt="Profile Image"
//             className="w-12"
//           />
//           <span className="font-semibold">{user?.school_name}</span>
//         </div>
//         <div className="flex items-center gap-7">
//           <div className="text-black relative">
//             <img
//               src="/assets/icons/bell-icon.svg"
//               alt="Bell Icon"
//               className="w-6"
//             />
//             <div className="absolute top-[2px] left-3 bg-[#E12E2E] w-[22px] h-[16px] flex justify-center items-center font-medium text-white text-xs rounded-full">
//               12
//             </div>
//           </div>
//           <div className="ml-2">
//             <DropdownButton
//               buttonText={"Create new"}
//               lists={createNew}
//               className={"right-0 top-[4rem]"}
//               onButtonClick={() => setIsOpen(false)} // Close panel on create new click
//             />
//           </div>
//           <div className="relative flex flex-col items-start w-fit rounded-lg profile-panel">
//             {loading ? (
//               <LoadingSpinner className="animate-spin h-10 w-10 text-[#0AAC6C]" />
//             ) : (
//               <Button
//                 type={"button"}
//                 variant={"ghost"}
//                 onClick={() => setIsOpen((prev) => !prev)}
//                 className="flex items-center gap-2 hover:bg-transparent"
//               >
//                 <div className="rounded-full overflow-hidden">
//                   {user?.usertype === "school" ? (
//                     <img
//                       src={
//                         user?.avatar || "/assets/images/school-placeholder.png"
//                       }
//                       alt="Profile Image"
//                       className="w-12"
//                     />
//                   ) : (
//                     <img
//                       src={
//                         user?.avatar || "/assets/images/placeholder-user.png"
//                       }
//                       alt="Profile Image"
//                       className="w-10"
//                     />
//                   )}
//                 </div>

//                 <div>
//                   {!isOpen ? (
//                     <img
//                       src="/assets/icons/angle-down.svg"
//                       alt="Angle Down Arrow"
//                     />
//                   ) : (
//                     <img
//                       src="/assets/icons/angle-down.svg"
//                       alt="Angle Down Arrow"
//                       className="rotate-180"
//                     />
//                   )}
//                 </div>

//                 <div className="flex flex-col items-start">
//                   <span className="block text-[#0B1A2D] font-medium text-sm">
//                     {user?.usertype === "school" ? (
//                       <p>{user?.school_name}</p>
//                     ) : (
//                       <p>
//                         {user?.firstname} {user?.lastname}
//                       </p>
//                     )}
//                   </span>
//                   <span className="block text-[#B2BBCE] text-xs mt-[2px] capitalize">
//                     {user?.usertype}
//                   </span>
//                 </div>
//               </Button>
//             )}

//             {isOpen && (
//               <div
//                 className={`bg-white shadow-sm py-4 px-2 absolute top-[4rem] right-2.5 flex flex-col rounded-lg w-[240px]`}
//               >
//                 {profile.map((list, index) => (
//                   <UserProfileModal
//                     key={index}
//                     student={user}
//                     trigger={
//                       <div
//                         className="flex w-full justify-between pr-4 items-center gap-4 hover:bg-slate-100 cursor-pointer rounded-lg"
//                         onClick={
//                           list.name === "Logout" ? onLogout : list.onButtonClick
//                         }
//                       >
//                         <div className="flex items-center gap-3 py-3 pl-2.5">
//                           <img src={list.icon} alt="" className="w-5" />
//                           <span className="text-[#5B5B5B] font-semibold">
//                             {list.name}
//                           </span>
//                         </div>
//                         <ChevronRight />
//                       </div>
//                     }
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default TopBar;
