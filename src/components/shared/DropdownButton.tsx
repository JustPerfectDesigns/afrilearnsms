import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

// const lists = [
//   {
//     name: "First Link",
//     icon: "1",
//   },
//   {
//     name: "Second Link",
//     icon: "2",
//   },
//   {
//     name: "Third Link",
//     icon: "3",
//   },
//   {
//     name: "Fourth Link",
//     icon: "4",
//   },
// ];

const DropdownButton = ({ lists, buttonText, className, onButtonClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col items-start w-fit rounded-lg">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#0AAC6C] flex justify-center items-center gap-2"
      >
        {!isOpen ? (
          <img
            src="/assets/icons/plus-icon.svg"
            alt="Plus Icon"
            className="w-4"
          />
        ) : (
          <img
            src="/assets/icons/plus-icon.svg"
            alt="Plus Icon"
            className="w-4 rotate-45"
          />
        )}
        {buttonText}
      </Button>
      {/* <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {buttonText}
        {!isOpen ? "+" : "x"}
      </button> */}
      {isOpen && (
        <div
          className={`bg-white shadow-sm py-4 px-2 absolute top-20 flex flex-col rounded-lg w-[240px] ${className}`}
        >
          {lists.map((list, index) => (
            <div
              key={index}
              className="flex w-full justify-between pr-4 items-center gap-4 hover:bg-slate-100 cursor-pointer rounded-lg"
            >
              <div className="flex w-full justify-start items-center gap-4 p-4">
                <img src={list.icon} alt={list.name} />
                <h3 className="font-semibold ">{list.name}</h3>
              </div>

              <ChevronRight size={20} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownButton;
