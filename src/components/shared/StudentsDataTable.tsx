import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import StudentDetailsModal from "./StudentDetailsModal";

interface ClassId {
  name: string;
}

interface Student {
  firstname?: string;
  lastname?: string;
  gender?: string;
  email?: string;
  phone?: string;
  phone2?: string;
  address?: string;
  school_name?: string;
  country?: string;
  state?: string;
  lga?: string;
  street?: string;
  avatar?: string;
  image?: string;
  _id?: string;
  classId?: ClassId; // Updated to reflect that classId is an object
  guardianName?: string;
  guardianPhone?: string;
  name?: string;
}

interface StudentsDataTableProps {
  students: Student[];
}

const StudentsDataTable: React.FC<StudentsDataTableProps> = ({ students }) => {
  const { loading, error, fetchUser } = useUserStore();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token, fetchUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto sm:rounded-lg w-full">
        <div className="pb-4 bg-white dark:bg-gray-900 flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <img
              src="/assets/icons/user-icon.svg"
              alt="User icon"
              className="w-5"
            />
            <span>{students?.length}</span>
          </div>
          <button className="flex justify-center items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100">
            <img
              src="/assets/icons/layout-icon.svg"
              alt="Layout Icon"
              className="w-4"
            />
            <span className="block">Table content</span>
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-6">
                Image
              </th>
              <th scope="col" className="px-6 py-6">
                ID
              </th>
              <th scope="col" className="px-6 py-6">
                First Name
              </th>
              <th scope="col" className="px-6 py-6">
                Last Name
              </th>
              <th scope="col" className="px-6 py-6">
                Gender
              </th>
              <th scope="col" className="px-6 py-6">
                Class
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {students.map((student) => (
              <StudentDetailsModal
                key={student?._id}
                student={student}
                trigger={
                  <tr className="bg-white border-b hover:bg-[#CEEEE2] group cursor-pointer">
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      <img
                        src={
                          student?.image ||
                          "/assets/images/placeholder-user.png"
                        }
                        alt="Student's Image"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {student?._id}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {student?.firstname}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {student?.lastname}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      <span className="text-[#374258] font-semibold text-xs uppercase">
                        {student?.gender}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      <span className="text-[#374258] font-semibold text-xs">
                        {student?.classId?.name}
                      </span>
                    </td>
                  </tr>
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsDataTable;
