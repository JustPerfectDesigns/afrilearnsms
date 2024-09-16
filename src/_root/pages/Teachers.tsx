import { useState } from "react";
import TeachersDataTable from "@/components/shared/TeachersDataTable";
import { Button } from "@/components/ui/button";
import AddTeacherModal from "@/components/shared/AddTeacherModal";
import { useClassStore } from "@/store/classStore";

const Teachers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedClassId } = useClassStore();

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
            src="/assets/icons/teachers-icon-light.svg"
            alt="Dashboard Icon"
            className="w-7"
          />
          <h1 className="text-[#374258] text-lg font-semibold">Teachers</h1>
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
            <img
              src="/assets/icons/teachers-icon-white.svg"
              alt="Students Icon"
            />
            Add Teacher
          </Button>

          <AddTeacherModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </form>
      </div>

      <div className="mt-9 w-full bg-white rounded-lg">
        <TeachersDataTable />
      </div>
    </div>
  );
};

export default Teachers;
