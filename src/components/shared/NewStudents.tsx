import { NavLink } from "react-router-dom";
import DataTable from "./DataTable";

const NewStudents = () => {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <NavLink to="/">
          <img
            src="/assets/icons/back-arrow.svg"
            alt="Back Arrow"
            className="w-9"
          />
        </NavLink>

        <NavLink to="/" className="text-[#374258]">
          Dashboard
        </NavLink>
        <span className="text-[#868d9f]">/</span>
        <span className="text-[#868d9f]">New students</span>
      </div>

      <div className="mt-9 bg-white px-4 py-3 rounded-lg">
        <div className="flex items-center gap-1 py-3">
          <img src="/assets/icons/student-icon.svg" alt="" />
          <span>7</span>
        </div>

        {/* Data table  */}
        <DataTable />
      </div>
    </div>
  );
};
export default NewStudents;
