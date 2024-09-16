// import { Button } from "@/components/ui/button";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useEffect, useState } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import ClassesTabs from "@/components/shared/ClassesTabs";
// import { useClassStore } from "@/store/classStore";
// // import { useTeacherStore } from "@/store/teacherStore";
// import axios from "axios";
// import { useAuthStore } from "@/store/authStore";

// const Classes = () => {
//   const { token } = useAuthStore();
//   const { classes, selectedClassId, setClasses, setSelectedClassId } =
//     useClassStore();

//   const [students, setStudents] = useState<any[]>([]);
//   const [teachers, setTeachers] = useState<any[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get(
//           "https://afrilearn-api-staging.up.railway.app/v1/classes"
//         );
//         setClasses(response.data.data);
//         if (response.data.data.length > 0) {
//           setSelectedClassId(response.data.data[0]._id);
//         }
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchClasses();
//   }, []);

//   const fetchStudentHandler = async (classId: string): Promise<void> => {
//     console.log(classId, "CLASS ID");
//     try {
//       const response = await axios.get(
//         `https://afrilearn-api-staging.up.railway.app/v1/users/students?classId=${classId}&page=${1}&limit=${20}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const studentData = response.data.data.user;
//       console.log(studentData, classId, "DATA");
//       setStudents(Array.isArray(studentData) ? studentData : []); // Ensure data is an array
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setStudents([]); // Reset to an empty array on error
//     }
//   };

//   const fetchTeacherHandler = async (classId: string): Promise<void> => {
//     console.log(classId, "CLASS ID");
//     try {
//       const response = await axios.get(
//         `https://afrilearn-api-staging.up.railway.app/v1/users/teachers?classId=${classId}&page=${1}&limit=${20}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const teacherData = response.data.data.user;
//       console.log(teacherData, classId, "DATA");
//       setTeachers(Array.isArray(teacherData) ? teacherData : []); // Ensure data is an array
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//       setTeachers([]); // Reset to an empty array on error
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <img
//             src="/assets/icons/classes-icon-light.svg"
//             alt="Dashboard Icon"
//             className="w-7"
//           />
//           <h1 className="text-[#374258] text-lg font-semibold">Classes</h1>
//         </div>

//         <form className="flex items-center gap-3">
//           <div className="flex items-center gap-2 bg-white h-10 w-80 rounded-lg px-3 border border-[#D1DAE4]">
//             <img
//               src="/assets/icons/search.svg"
//               alt="Search Icon"
//               className="w-[1.1rem]"
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               className="border-none outline-none bg-transparent"
//             />
//           </div>
//           <Button className="h-10 bg-[#0AAC6C] hover:bg-[#29b77e] flex justify-center items-center gap-2 rounded-md">
//             <img
//               src="/assets/icons/classes-icon-white.svg"
//               alt="Students Icon"
//             />
//             Add Class
//           </Button>
//         </form>
//       </div>

//       <div className="mt-9 w-full">
//         <ResizablePanelGroup direction="horizontal" className="h-full w-full">
//           <ResizablePanel defaultSize={15}>
//             <Tabs
//               value={selectedClassId}
//               onValueChange={(value) => setSelectedClassId(value)}
//               className="w-full"
//             >
//               <ScrollArea className="h-[77vh]">
//                 <TabsList className="justify-start items-start gap-4 text-left flex-col w-full">
//                   {classes.map((classItem) => (
//                     <TabsTrigger
//                       key={classItem._id}
//                       value={classItem._id}
//                       className="bg-transparent data-[state=active]:bg-white px-3 py-3 w-[160px] justify-start"
//                       onClick={() => {
//                         fetchStudentHandler(classItem._id),
//                           fetchTeacherHandler(classItem._id);
//                       }}
//                     >
//                       {classItem.name}
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>
//               </ScrollArea>
//             </Tabs>
//           </ResizablePanel>
//           <ResizableHandle withHandle />
//           <ResizablePanel defaultSize={85}>
//             {classes.map(
//               (classItem) =>
//                 selectedClassId === classItem._id && (
//                   <ScrollArea key={classItem._id} className="h-[77vh]">
//                     <span className="font-semibold text-lg ml-6 mb-4 block">
//                       {classItem.name}
//                     </span>
//                     <div className="p-5 ml-6 rounded-lg">
//                       <ClassesTabs
//                         students={students}
//                         teachers={teachers}
//                         selectedGroupID={classItem.groupId}
//                         selectedClassID={classItem._id}
//                       />
//                     </div>
//                   </ScrollArea>
//                 )
//             )}
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </div>
//     </div>
//   );
// };

// export default Classes;

import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ClassesTabs from "@/components/shared/ClassesTabs";
import { useClassStore } from "@/store/classStore";
// import { useTeacherStore } from "@/store/teacherStore";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";

interface Student {
  _id: string;
  name: string;
  image?: string;
  isPresent: boolean;
  studentId: string;
}

interface Teacher {
  _id: string;
  name: string;
  image?: string;
  isPresent: boolean;
  teacherId: string;
}

const Classes = () => {
  const { token } = useAuthStore();
  const { classes, selectedClassId, setClasses, setSelectedClassId } =
    useClassStore();

  const [students, setStudents] = useState<Student[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          "https://afrilearn-api-staging.up.railway.app/v1/classes"
        );
        setClasses(response.data.data);
        if (response.data.data.length > 0) {
          setSelectedClassId(response.data.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const fetchStudentHandler = async (classId: string): Promise<void> => {
    console.log(classId, "CLASS ID");
    try {
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/users/students?classId=${classId}&page=${1}&limit=${20}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const studentData = response.data.data.user;
      console.log(studentData, classId, "DATA");
      setStudents(Array.isArray(studentData) ? studentData : []); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]); // Reset to an empty array on error
    }
  };

  const fetchTeacherHandler = async (classId: string): Promise<void> => {
    console.log(classId, "CLASS ID");
    try {
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/users/teachers?classId=${classId}&page=${1}&limit=${20}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const teacherData = response.data.data.user;
      console.log(teacherData, classId, "DATA");
      setTeachers(Array.isArray(teacherData) ? teacherData : []); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setTeachers([]); // Reset to an empty array on error
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/assets/icons/classes-icon-light.svg"
            alt="Dashboard Icon"
            className="w-7"
          />
          <h1 className="text-[#374258] text-lg font-semibold">Classes</h1>
        </div>

        <form className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white h-10 w-80 rounded-lg px-3 border border-[#D1DAE4]">
            <img
              src="/assets/icons/search.svg"
              alt="Search Icon"
              className="w-[1.1rem]"
            />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent"
            />
          </div>
          <Button className="h-10 bg-[#0AAC6C] hover:bg-[#29b77e] flex justify-center items-center gap-2 rounded-md">
            <img
              src="/assets/icons/classes-icon-white.svg"
              alt="Students Icon"
            />
            Add Class
          </Button>
        </form>
      </div>

      <div className="mt-9 w-full">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={15}>
            <Tabs
              value={selectedClassId}
              onValueChange={(value) => setSelectedClassId(value)}
              className="w-full"
            >
              <ScrollArea className="h-[77vh]">
                <TabsList className="justify-start items-start gap-4 text-left flex-col w-full">
                  {classes.map((classItem) => (
                    <TabsTrigger
                      key={classItem._id}
                      value={classItem._id}
                      className="bg-transparent data-[state=active]:bg-white px-3 py-3 w-[160px] justify-start"
                      onClick={() => {
                        fetchStudentHandler(classItem._id),
                          fetchTeacherHandler(classItem._id);
                      }}
                    >
                      {classItem.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85}>
            {classes.map(
              (classItem) =>
                selectedClassId === classItem._id && (
                  <ScrollArea key={classItem._id} className="h-[77vh]">
                    <span className="font-semibold text-lg ml-6 mb-4 block">
                      {classItem.name}
                    </span>
                    <div className="p-5 ml-6 rounded-lg">
                      <ClassesTabs
                        students={students}
                        teachers={teachers}
                        selectedGroupID={classItem.groupId}
                        selectedClassID={classItem._id}
                      />
                    </div>
                  </ScrollArea>
                )
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Classes;
