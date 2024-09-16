import { useEffect } from "react";
import { useTeacherStoreForClasses } from "@/store/teacherStore";
import TeacherDetailsModal from "./TeacherDetailsModal";
import LoadingSpinner from "./LoadingSpinner";

const TeachersDataTableForClasses = () => {
  const { teachers, fetchTeachers, loading, error } =
    useTeacherStoreForClasses();

  useEffect(() => {
    fetchTeachers(1, 20); // Fetch teachers with page 1 and limit 20
  }, [fetchTeachers]);

  useEffect(() => {
    console.log("Teachers Data in Component:", teachers); // Log data in the component
  }, [teachers]);

  if (loading) {
    return <LoadingSpinner className="animate-spin h-20 w-20 text-[#0AAC6C]" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!teachers.length) {
    return <div>No teachers found.</div>;
  }

  return (
    <div className="w-full rounded-lg">
      <div className="relative overflow-x-auto rounded-lg w-full">
        <div className="py-4 px-5 bg-white dark:bg-gray-900 flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <img
              src="/assets/icons/user-icon.svg"
              alt="User icon"
              className="w-5"
            />
            <span>{teachers.length}</span>
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
                Classes
              </th>

              <th scope="col" className="px-6 py-6"></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {teachers.map((teacher, index) => (
              <TeacherDetailsModal
                // key={teacher.id} // Add the key prop here
                key={index} // Add the key prop here
                trigger={
                  <tr className="bg-white border-b hover:bg-[#CEEEE2] group cursor-pointer">
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      <img
                        src={teacher.imageUrl || "/assets/images/taju.png"}
                        alt="Teacher's Image"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {teacher?._id}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {teacher?.firstname}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {teacher?.lastname}
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      <span className="text-[#374258] font-semibold uppercase">
                        {teacher?.gender}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-[#374258] font-semibold">
                      {teacher?.classes}
                    </td>
                    {/* <td className="px-6 py-3 text-[#374258] font-semibold">
                      <span className="uppercase bg-[#CEEEE2] text-[#374258] group-hover:bg-white rounded-[0.1rem] text-[0.65rem] font-bold p-1">
                        {teacher.attendance}
                      </span>
                    </td> */}
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

export default TeachersDataTableForClasses;
