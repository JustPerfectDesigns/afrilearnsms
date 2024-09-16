import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentsDataTable from "@/components/shared/StudentsDataTable";
import AddStudentModal from "@/components/shared/AddStudentModal";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { useClassStore } from "@/store/classStore";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const Students = () => {
  const { token } = useAuthStore();
  const { classes, selectedClassId, setClasses, setSelectedClassId } =
    useClassStore();

  const [students, setStudents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://afrilearn-api-staging.up.railway.app/v1/classes"
        );
        setClasses(response.data.data);
        if (response.data.data.length > 0) {
          setSelectedClassId(response.data.data[0]._id);
          const stdResp = await fetchStudentHandler(response.data.data[0]._id); // fix
          const stdData = stdResp.response.data.data.user;
          setStudents(Array.isArray(stdData) ? stdData : []);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const fetchStudentHandler = async (classId: string): Promise<void> => {
    console.log(classId, "CLASS ID");
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/assets/icons/students-light.svg"
            alt="Dashboard Icon"
            className="w-7"
          />
          <h1 className="text-[#374258] text-lg font-semibold">Students</h1>
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
          <Button
            className="h-10 bg-[#0AAC6C] hover:bg-[#29b77e] flex justify-center items-center gap-2 rounded-md"
            onClick={handleOpenModal}
            type="button"
          >
            <img src="/assets/icons/students.svg" alt="Students Icon" />
            Add Student
          </Button>

          <AddStudentModal isOpen={isModalOpen} onClose={handleCloseModal} />
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
                      onClick={() => fetchStudentHandler(classItem._id)}
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
            <ScrollArea className="h-[77vh]">
              {loading ? (
                <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />
              ) : (
                selectedClassId && (
                  <div>
                    <span className="font-semibold text-lg ml-6 mb-4 block">
                      {classes.find((cls) => cls._id === selectedClassId)?.name}
                    </span>
                    <div className="p-5 ml-6 bg-white rounded-lg">
                      <StudentsDataTable students={students} />
                    </div>
                  </div>
                )
              )}
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Students;
