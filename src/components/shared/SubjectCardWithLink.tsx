import React from "react";
import Card from "./Card";

interface SubjectCardWithLinkProps {
  subjects: {
    _id: string;
    name: string;
    defaultImage: string;
    topicLength: number;
  }[];
  onSubjectClick: (subjectId: string) => void; // Add this prop for handling clicks
}

const SubjectCardWithLink: React.FC<SubjectCardWithLinkProps> = ({
  subjects,
  onSubjectClick,
}) => {
  console.log("Subjectsssss", subjects);

  return (
    <div className="grid grid-cols-4 gap-4">
      {subjects.map((subject, index) => (
        <Card
          key={index}
          title={subject.name}
          subtitle={subject.topicLength}
          defaultImage={subject.defaultImage}
          activeImage={subject.activeImage}
          onClick={() => onSubjectClick(subject._id)} // Pass the subjectId as a prop
        />
      ))}
    </div>
  );
};

export default SubjectCardWithLink;
