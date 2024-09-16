import { useParams } from "react-router-dom";

const TopicNotes = () => {
  const { lessonId, topicIndex } = useParams<{
    lessonId: string;
    topicIndex: string;
  }>();

  const topicsData = {
    "agricultural-science": {
      title: "Agricultural Science",
      topics: [
        { name: "Crop Production", notes: "Notes about Crop Production..." },
        { name: "Soil Science", notes: "Notes about Soil Science..." },
        { name: "Animal Husbandry", notes: "Notes about Animal Husbandry..." },
      ],
    },
    "basic-science": {
      title: "Basic Science",
      topics: [
        { name: "Physics", notes: "Notes about Physics..." },
        { name: "Chemistry", notes: "Notes about Chemistry..." },
        { name: "Biology", notes: "Notes about Biology..." },
      ],
    },
    // Add more subjects and topics here
  };

  const subject = topicsData[lessonId];
  const topic = subject?.topics[parseInt(topicIndex, 10)];

  return (
    <div className="mt-9">
      <h1 className="text-lg font-bold mb-4">{topic?.name}</h1>
      <p>{topic?.notes}</p>
    </div>
  );
};

export default TopicNotes;
