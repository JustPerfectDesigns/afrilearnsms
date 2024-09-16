// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import SubjectCardWithLink from "@/components/shared/SubjectCardWithLink";
// import { fetchClasses, fetchLessonsForClass } from "@/components/endpoints/api";
// import { useClassStore } from "@/store/classStore";
// import axios from "axios";
// import { useAuthStore } from "@/store/authStore";
// import useLessonStore from "@/store/lessonStore";

// const Lessons: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState<string>("");
//   const { setLesson } = useLessonStore();

//   // Zustand state and setters
//   const {
//     classes,
//     subjects,
//     lessons,
//     selectedGroupId,
//     selectedClassId,
//     selectedSubjectId,
//     setClasses,
//     setSubjects,
//     setLessons,
//     setSelectedGroupId,
//     setSelectedClassId,
//     setSelectedSubjectId,
//   } = useClassStore();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const levels = await fetchClasses();
//         setClasses(levels);

//         if (levels.length > 0) {
//           const firstClassId = levels[0]._id;
//           const firstGroupId = levels[0].groupId;
//           setSelectedTab(firstClassId);
//           setSelectedClassId(firstClassId);
//           setSelectedGroupId(firstGroupId);
//         }
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchData();
//   }, [setClasses, setSelectedClassId, setSelectedGroupId]);

//   useEffect(() => {
//     if (selectedTab) {
//       fetchSubjectsForSelectedClass(selectedTab);
//     }
//   }, [selectedTab, selectedGroupId]);

//   const fetchSubjectsForSelectedClass = async (classId: string) => {
//     try {
//       const { token } = useAuthStore.getState();
//       const response = await axios.get(
//         `https://afrilearn-api-staging.up.railway.app/v1/subjects/bygroupId/${selectedGroupId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const lessons = response.data.data;

//       const topicCount = lessons.map(async (lesson) => {
//         const response = await axios.get(
//           `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${lesson?._id}?classId=${selectedClassId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const topics = response?.data?.data;
//         return { ...lesson, topicLength: topics?.length };
//       });

//       const allResp = await Promise.all(topicCount);

//       setSubjects(allResp);
//       setLessons([]);
//     } catch (error) {
//       console.error("Error fetching subjects:", error);
//       setSubjects([]);
//     }
//   };

//   const handleTabChange = (classId: string) => {
//     setSelectedTab(classId);
//     setSelectedClassId(classId);
//     setSubjects([]);
//     setLessons([]);
//   };

//   const handleSubjectClick = async (subjectId: string) => {
//     setSelectedSubjectId(subjectId);
//   };

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <img
//             src="/assets/icons/lessons-light.svg"
//             alt="Dashboard Icon"
//             className="w-7"
//           />
//           <h1 className="text-[#374258] text-lg font-semibold">Lessons</h1>
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
//             Notes
//           </Button>
//         </form>
//       </div>

//       <div className="mt-9 w-full">
//         <ResizablePanelGroup direction="horizontal" className="h-full w-full">
//           <ResizablePanel defaultSize={15}>
//             <Tabs
//               value={selectedTab}
//               onValueChange={handleTabChange}
//               className="w-full"
//             >
//               <ScrollArea className="h-[77vh]">
//                 <TabsList className="justify-start items-start gap-4 text-left flex-col w-full">
//                   {classes.map((classLevel) => (
//                     <TabsTrigger
//                       onClick={() => setSelectedGroupId(classLevel.groupId)}
//                       key={classLevel._id}
//                       value={classLevel._id}
//                       className="bg-transparent data-[state=active]:bg-white px-3 py-3 w-[160px] justify-start"
//                     >
//                       {classLevel.name}
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>
//               </ScrollArea>
//             </Tabs>
//           </ResizablePanel>
//           <ResizableHandle withHandle />
//           <ResizablePanel defaultSize={85}>
//             <ScrollArea className="h-[77vh]">
//               <span className="font-semibold text-lg ml-6 mb-6 block">
//                 {
//                   classes.find((classLevel) => classLevel._id === selectedTab)
//                     ?.name
//                 }
//               </span>
//               <div className="ml-6">
//                 {subjects.length > 0 ? (
//                   <SubjectCardWithLink
//                     subjects={subjects}
//                     onSubjectClick={handleSubjectClick}
//                   />
//                 ) : (
//                   <p className="text-gray-500">No subjects available.</p>
//                 )}
//                 {/* {lessons.length > 0 && (
//                   <div>
//                     <h2 className="text-xl font-bold mt-6">Lessons</h2>
//                     {lessons.map((lesson) => (
//                       <div key={lesson._id} className="mt-4">
//                         <h3 className="text-lg font-semibold">{lesson.name}</h3>
//                       </div>
//                     ))}
//                   </div>
//                 )} */}
//               </div>
//             </ScrollArea>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </div>
//     </div>
//   );
// };

// export default Lessons;

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import SubjectCardWithLink from "@/components/shared/SubjectCardWithLink";
import { fetchClasses, fetchLessonsForClass } from "@/components/endpoints/api";
import { useClassStore } from "@/store/classStore";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import useLessonStore from "@/store/lessonStore";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const Lessons: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { setLesson } = useLessonStore();

  // Zustand state and setters
  const {
    classes,
    subjects,
    lessons,
    selectedGroupId,
    selectedClassId,
    selectedSubjectId,
    setClasses,
    setSubjects,
    setLessons,
    setSelectedGroupId,
    setSelectedClassId,
    setSelectedSubjectId,
  } = useClassStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const levels = await fetchClasses();
        setClasses(levels);

        if (levels.length > 0) {
          const firstClassId = levels[0]._id;
          const firstGroupId = levels[0].groupId;
          setSelectedTab(firstClassId);
          setSelectedClassId(firstClassId);
          setSelectedGroupId(firstGroupId);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setClasses, setSelectedClassId, setSelectedGroupId]);

  useEffect(() => {
    if (selectedTab) {
      fetchSubjectsForSelectedClass(selectedTab);
    }
  }, [selectedTab, selectedGroupId]);

  const fetchSubjectsForSelectedClass = async (classId: string) => {
    try {
      setLoading(true);
      const { token } = useAuthStore.getState();
      const response = await axios.get(
        `https://afrilearn-api-staging.up.railway.app/v1/subjects/bygroupId/${selectedGroupId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const lessons = response.data.data;

      const topicCount = lessons.map(async (lesson) => {
        const response = await axios.get(
          `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${lesson?._id}?classId=${selectedClassId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const topics = response?.data?.data;
        return { ...lesson, topicLength: topics?.length };
      });

      const allResp = await Promise.all(topicCount);

      setSubjects(allResp);
      setLessons([]);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setSubjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (classId: string) => {
    setSelectedTab(classId);
    setSelectedClassId(classId);
    setSubjects([]);
    setLessons([]);
  };

  const handleSubjectClick = async (subjectId: string) => {
    setSelectedSubjectId(subjectId);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/assets/icons/lessons-light.svg"
            alt="Dashboard Icon"
            className="w-7"
          />
          <h1 className="text-[#374258] text-lg font-semibold">Lessons</h1>
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
            Notes
          </Button>
        </form>
      </div>

      <div className="mt-9 w-full">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={15}>
            <Tabs
              value={selectedTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <ScrollArea className="h-[77vh]">
                <TabsList className="justify-start items-start gap-4 text-left flex-col w-full">
                  {classes.map((classLevel) => (
                    <TabsTrigger
                      onClick={() => setSelectedGroupId(classLevel.groupId)}
                      key={classLevel._id}
                      value={classLevel._id}
                      className="bg-transparent data-[state=active]:bg-white px-3 py-3 w-[160px] justify-start"
                    >
                      {classLevel.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85}>
            <ScrollArea className="h-[77vh]">
              <span className="font-semibold text-lg ml-6 mb-6 block">
                {
                  classes.find((classLevel) => classLevel._id === selectedTab)
                    ?.name
                }
              </span>
              <div className="ml-6">
                {loading ? (
                  <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />
                ) : subjects.length > 0 ? (
                  <SubjectCardWithLink
                    subjects={subjects}
                    onSubjectClick={handleSubjectClick}
                  />
                ) : (
                  <p className="text-gray-500">No subjects available.</p>
                )}
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Lessons;
