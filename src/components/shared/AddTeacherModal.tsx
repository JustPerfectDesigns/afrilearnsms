import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSchoolIDStore } from "@/store/authStore";
// import { useEffect, useState } from "react";
// import { fetchClasses } from "../endpoints/api";

interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTeacherModal: React.FC<AddTeacherModalProps> = ({
  isOpen,
  onClose,
}) => {
  // const [selectedClass, setSelectedClass] = useState("");
  // const [classes, setClasses] = useState([]);
  const { schoolId } = useSchoolIDStore();

  // useEffect(() => {
  //   (async () => {
  //     const getClasses = await fetchClasses();
  //     setClasses(getClasses);
  //     console.log(getClasses, "GET CLASSES NEW");
  //   })();
  // }, []);

  // const handleSelectChange = (event) => {
  //   setSelectedClass(event.target.value);
  // };

  const handleCopyLink = () => {
    const link = `http://localhost:5173/teacher-sign-up/?schoolId=${schoolId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Add teacher
          </DialogTitle>
          <DialogDescription>
            {/* Anyone who has this link will be able to view this. */}
          </DialogDescription>
        </DialogHeader>

        <div>
          <p className="bg-slate-100 border-t-0 border-l-0 border-r-0 border-b border-[#0BC279] p-3">
            {`http://localhost:5173/teacher-sign-up/?schoolId=${schoolId}`}
          </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCopyLink}
            className="w-full text-white bg-[#0BC279] hover:bg-[#1ca870]"
          >
            Copy Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTeacherModal;
