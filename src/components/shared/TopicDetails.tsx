import { useEffect, useState } from "react";
import axios from "axios";
import HTMLRenderer from "react-html-renderer";
import { useAuthStore } from "@/store/authStore";
import { useClassStore } from "@/store/classStore";
import useLessonStore from "@/store/lessonStore";
import { Link, useParams, useLocation } from "react-router-dom";

const TopicDetails = () => {
  const { selectedClassId, selectedSubjectId } = useClassStore();
  const { token } = useAuthStore();
  const { setLesson } = useLessonStore();
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const topic = location?.state?.content;

  // console.log(Title, "STATE");

  // useEffect(() => {
  //   const fetchLessons = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${selectedSubjectId}?classId=${selectedClassId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const lesson = response.data.data[0];
  //       console.log("Lesson from LessonDetails: ", lesson);
  //       setLesson(lesson);
  //       setTopic(lesson); // Store the lesson object in the state
  //     } catch (error: any) {
  //       console.error("Error fetching lessons:", error);
  //       setError(error.message || "An error occurred while fetching lessons.");
  //     }
  //   };

  //   if (selectedSubjectId && selectedClassId) {
  //     fetchLessons();
  //   }
  // }, [selectedSubjectId, selectedClassId, token, setLesson]);

  // useEffect(() => {
  //   const fetchLessons = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://afrilearn-api-staging.up.railway.app/v1/lessons/bysubject/${selectedSubjectId}?classId=${selectedClassId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const lessons = response.data.data;
  //       console.log("Lesson from LessonDetails: ", lessons);

  //       // Extract IDs from each lesson
  //       const lessonIds = lessons.map((lesson: any) => lesson._id);
  //       console.log("Lesson IDs: ", lessonIds);

  //       // Set lesson data and IDs in state
  //       setLesson(lessons);
  //       setTopic(lessons); // Store the lesson object in the state
  //     } catch (error: any) {
  //       console.error("Error fetching lessons:", error);
  //       setError(error.message || "An error occurred while fetching lessons.");
  //     }
  //   };

  //   if (selectedSubjectId && selectedClassId) {
  //     fetchLessons();
  //   }
  // }, [selectedSubjectId, selectedClassId, token, setLesson]);

  return (
    <div className="mt-9">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        topic && (
          <div className="bg-white p-16 rounded-lg">
            <div className="w-[70%] mx-auto">
              <h1 className="text-2xl font-bold mb-12">{topic.title}</h1>
              <HTMLRenderer
                html={topic.content}
                components={{
                  h3: (props) => <h3 className="font-medium mt-8" {...props} />,
                  ol: (props) => <ol className="block" {...props} />,
                  ul: (props) => (
                    <ul
                      className="block list-disc pl-10 my-10 space-y-3"
                      {...props}
                    />
                  ),
                  img: ({ src, alt }) => (
                    <img className="w-full my-10" src={src} alt={alt} />
                  ),
                  p: (props) => <p className="my-10" {...props} />,
                  strong: (props) => (
                    <strong className="my-10 block" {...props} />
                  ),
                  a: Link,
                }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TopicDetails;
