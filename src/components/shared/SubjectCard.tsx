// import React, { useEffect, useState } from "react";
// // import Card from "./Card";
// import { useAuthStore } from "@/store/authStore";
// import axios from "axios";
// import LoadingSpinner from "./LoadingSpinner";

// const SubjectCard: React.FC = ({
//   groupId,
//   classId,
// }: {
//   groupId: string;
//   classId: string;
// }) => {
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const { token } = useAuthStore.getState();
//         const response = await axios.get(
//           `https://afrilearn-api-staging.up.railway.app/v1/subjects/bygroupId/${groupId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const api_response = response.data.data;

//         const topicCount = api_response.map(async (lesson) => {
//           const response = await axios.get(
//             `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${lesson?._id}?classId=${classId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );
//           const topics = response?.data?.data;
//           return { ...lesson, topicLength: topics?.length };
//         });

//         const allResp = await Promise.all(topicCount);
//         setSubjects(allResp);
//       } catch (error) {
//         console.error("Error fetching subjects:", error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [groupId, classId]);

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {loading ? (
//         <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />
//       ) : (
//         subjects.map((subject, index) => {
//           return (
//             // <Card
//             //   key={index}
//             //   title={subject?.name}
//             //   defaultImage={subject?.defaultImage}
//             //   subtitle={subject?.topicLength}
//             // />
//             <div
//               className="max-w-sm overflow-hidden rounded-lg flex justify-center flex-col"
//               // onClick={subject?.onClick} // Handle the click event
//             >
//               <div className="w-full flex justify-center items-center bg-white hover:bg-[#0AAC6C] transition-all rounded-3xl shadow-sm h-44 relative group">
//                 <img
//                   className="w-[90px] object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute"
//                   src={subject?.defaultImage}
//                   alt={subject?.title}
//                 />
//                 <img
//                   className="w-[90px] object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute"
//                   src={subject?.activeImage}
//                   alt={`${subject?.title} active`}
//                 />
//               </div>
//               <div className="py-1">
//                 <div className="font-bold">{subject?.name}</div>
//                 <p className="text-xs font-medium text-slate-500 mt-2">
//                   {subject?.topicLength} Topics
//                 </p>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default SubjectCard;

// //return subject.map((item, idx) => (
// //<h1 key={String(idx)}>{item?.name}</h1>
// //));
// // <Card
// //   key={index}
// //   title={subject?.name}
// //   defaultImage={subject?.defaultImage}
// //   subtitle={subject?.topicLength}
// // />

import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

interface Subject {
  _id: string;
  name: string;
  defaultImage: string;
  activeImage: string;
  topicLength?: number; // Optional, as it's calculated dynamically
}

interface SubjectCardProps {
  groupId: string;
  classId: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ groupId, classId }) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { token } = useAuthStore.getState();
        const response = await axios.get(
          `https://afrilearn-api-staging.up.railway.app/v1/subjects/bygroupId/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const api_response: Subject[] = response.data.data;

        const topicCount = api_response.map(async (lesson) => {
          const response = await axios.get(
            `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${lesson._id}?classId=${classId}`,
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
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [groupId, classId]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {loading ? (
        <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />
      ) : (
        subjects.map((subject) => (
          <div
            key={subject._id}
            className="max-w-sm overflow-hidden rounded-lg flex justify-center flex-col"
          >
            <div className="w-full flex justify-center items-center bg-white hover:bg-[#0AAC6C] transition-all rounded-3xl shadow-sm h-44 relative group">
              <img
                className="w-[90px] object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute"
                src={subject.defaultImage}
                alt={subject.name}
              />
              <img
                className="w-[90px] object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute"
                src={subject.activeImage}
                alt={`${subject.name} active`}
              />
            </div>
            <div className="py-1">
              <div className="font-bold">{subject.name}</div>
              <p className="text-xs font-medium text-slate-500 mt-2">
                {subject.topicLength} Topics
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SubjectCard;
