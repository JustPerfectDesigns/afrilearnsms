import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import { useAuthStore } from "@/store/authStore";
import { useClassStore } from "@/store/classStore";
import useLessonStore from "@/store/lessonStore";

const LessonDetails = () => {
  // const { subjectId } = useParams<{ subjectId: string }>();
  const { selectedClassId, selectedSubjectId } = useClassStore();
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const { token } = useAuthStore();
  const { setLesson } = useLessonStore();
  const [topics, setTopics] = useState<{ name: string; imageUrl: string }[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${selectedSubjectId}?classId=${selectedClassId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const lessons = response.data.data;
        console.log("Lessons from LessonDetails: ", lessons);
        setLesson(lessons);
        setTopics(lessons); // Adjust this line if the structure of lessons is different
      } catch (error: any) {
        console.error("Error fetching lessons:", error);
        setError(error.message || "An error occurred while fetching lessons.");
      } finally {
        setLoading(false);
      }
    };

    if (selectedSubjectId && selectedClassId) {
      fetchLessons();
    }
  }, [selectedSubjectId, selectedClassId, token, setLesson]);

  return (
    <div className="mt-9">
      <h1 className="text-lg font-bold mb-4">Lesson Details</h1>

      {topics.length > 0 && (
        <div>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  // to={`/lessons/${topic?.subjectId?.name}/${topic?.title}`}
                  to={{
                    pathname: `/lessons/${topic?.subjectId?.name}/${topic?.title}`,
                  }}
                  state={{ content: topic }}
                >
                  {/* <Card
                    title={topic?.title}
                    subtitle=""
                    imageUrl={topic?.coverImage}
                  /> */}
                  <div
                    className="max-w-sm rounded overflow-hidden cursor-pointer flex items-start justify-start flex-col" // Handle the click event
                  >
                    <div className="">
                      {topic.coverImage ? (
                        <img
                          className="w-full object-cover"
                          src={topic?.coverImage}
                          alt={topic?.title}
                        />
                      ) : (
                        <img
                          className="w-full object-cover"
                          src="/assets/images/lesson-placeholder.png"
                          alt={topic?.title}
                        />
                      )}
                    </div>
                    <div className="py-1">
                      <div className="font-bold text-left mt-2 mb-4">
                        {topic?.title}
                      </div>
                      {/* <p className="text-[#4E5058] text-xs">{subtitle}</p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* {error ? (
          <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <Link key={index} to={`/lessons/${selectedSubjectId}/${index}`}>
              <Card title={topic.name} subtitle="" imageUrl={topic.imageUrl} />
              </Link>
              ))}
              </div>
              )} */}
    </div>
  );
};

export default LessonDetails;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Card from "./Card";
// import { useAuthStore } from "@/store/authStore";
// import { useClassStore } from "@/store/classStore";
// import useLessonStore from "@/store/lessonStore";
// import LoadingSpinner from "./LoadingSpinner";

// const LessonDetails = () => {
//   const { selectedClassId, selectedSubjectId } = useClassStore();
//   const [loading, setLoading] = useState<boolean>(false);
//   const { token } = useAuthStore();
//   const { setLesson } = useLessonStore();
//   const [topics, setTopics] = useState<{ name: string; imageUrl: string }[]>(
//     []
//   );
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchLessons = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${selectedSubjectId}?classId=${selectedClassId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const lessons = response.data.data;
//         console.log("Lessons from LessonDetails: ", lessons);
//         setLesson(lessons);
//         setTopics(lessons); // Adjust this line if the structure of lessons is different
//       } catch (error: any) {
//         console.error("Error fetching lessons:", error);
//         setError(error.message || "An error occurred while fetching lessons.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (selectedSubjectId && selectedClassId) {
//       fetchLessons();
//     }
//   }, [selectedSubjectId, selectedClassId, token, setLesson]);

//   return (
//     <div className="mt-9">
//       <h1 className="text-lg font-bold mb-4">Lesson Details</h1>

//       {loading ? (
//         <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div>
//           {topics.length > 0 ? (
//             <div className="grid grid-cols-4 gap-4">
//               {topics.map((topic, index) => (
//                 <Link
//                   key={index}
//                   to={`/lessons/${topic?.name}/${topic?.name}`}
//                   state={{ content: topic }}
//                 >
//                   <div className="max-w-sm rounded overflow-hidden cursor-pointer flex items-start justify-start flex-col">
//                     <div>
//                       {topic?.imageUrl ? (
//                         <img
//                           className="w-full object-cover"
//                           src={topic?.imageUrl}
//                           alt={topic?.name}
//                         />
//                       ) : (
//                         <img
//                           className="w-full object-cover"
//                           src="/assets/images/lesson-placeholder.png"
//                           alt={topic?.name}
//                         />
//                       )}
//                     </div>
//                     <div className="py-1">
//                       <div className="font-bold text-left mt-2 mb-4">
//                         {topic?.name}
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No topics available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LessonDetails;
