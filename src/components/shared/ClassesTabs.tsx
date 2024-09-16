import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentsDataTable from "./StudentsDataTable";
import SubjectCard from "./SubjectCard";
import TeachersDataTableForClasses from "./TeachersDataTableForClasses";

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

interface ClassesTabsProps {
  students?: Student[];
  teachers?: Teacher[];
  selectedClassID: string;
  selectedGroupID: string;
}

const ClassesTabs: React.FC<ClassesTabsProps> = ({
  students = [],
  teachers = [],
  selectedGroupID,
  selectedClassID,
}) => {
  // Calculate the number of students and teachers
  const numberOfStudents = students.length;
  const numberOfTeachers = teachers.length;

  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="bg-transparent justify-start p-0 gap-8">
        <TabsTrigger
          value="dashboard"
          className="data-[state=active]:bg-transparent data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2.5px] data-[state=active]:before:bg-[#0AAC6C] relative data-[state=active]:before:-bottom-[0.15rem] px-0"
        >
          Dashboard
        </TabsTrigger>
        <TabsTrigger
          value="teachers"
          className="data-[state=active]:bg-transparent data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2.5px] data-[state=active]:before:bg-[#0AAC6C] relative data-[state=active]:before:-bottom-[0.15rem] px-0"
        >
          Teachers
        </TabsTrigger>
        <TabsTrigger
          value="students"
          className="data-[state=active]:bg-transparent data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2.5px] data-[state=active]:before:bg-[#0AAC6C] relative data-[state=active]:before:-bottom-[0.15rem] px-0"
        >
          Students
        </TabsTrigger>
        <TabsTrigger
          value="subjects"
          className="data-[state=active]:bg-transparent data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2.5px] data-[state=active]:before:bg-[#0AAC6C] relative data-[state=active]:before:-bottom-[0.15rem] px-0"
        >
          Subjects
        </TabsTrigger>
      </TabsList>

      {/* Dashboard Tab */}
      <TabsContent value="dashboard" className="mt-6">
        <div className="flex items-center gap-2">
          <div className="card-ui !w-40">
            <span className="block text-[#374258] text-sm font-medium">
              Pupils
            </span>
            <span className="mt-2 flex justify-end text-[#BE6195] text-xl font-semibold">
              {numberOfStudents}
            </span>
          </div>
          <div className="card-ui !w-40">
            <span className="block text-[#374258] text-sm font-medium">
              Teachers
            </span>
            <span className="mt-2 flex justify-end text-[#BE6195] text-xl font-semibold">
              {numberOfTeachers}
            </span>
          </div>
        </div>
      </TabsContent>

      {/* Teachers Tab */}
      <TabsContent value="teachers" className="mt-6">
        <TeachersDataTableForClasses />
      </TabsContent>

      {/* Students Tab */}
      <TabsContent value="students" className="mt-6 p-5 bg-white rounded-lg">
        <StudentsDataTable students={students} />
      </TabsContent>

      {/* Subjects Tab */}
      <TabsContent value="subjects" className="mt-6">
        <SubjectCard groupId={selectedGroupID} classId={selectedClassID} />
      </TabsContent>
    </Tabs>
  );
};

export default ClassesTabs;
