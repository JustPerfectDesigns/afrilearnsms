// import React from "react";
// import { Link } from "react-router-dom";

// interface CardProps {
//   title: string;
//   name: string;
//   subtitle: string;
//   defaultImage: string;
//   onClick: () => void; // Add this prop for handling clicks
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   subtitle,
//   defaultImage,
//   onClick,
// }) => {
//   return (
//     <Link to={`/lessons/${title.toLowerCase().replace(/\s+/g, "-")}`}>
//       <div
//         className="max-w-sm overflow-hidden cursor-pointer flex justify-center flex-col"
//         onClick={onClick} // Handle the click event
//       >
//         <div className="w-full flex justify-center items-center bg-white hover:bg-[#0AAC6C] transition-all rounded-3xl shadow-sm h-44">
//           <img
//             className="w-[90px] object-cover"
//             src={defaultImage}
//             alt={title}
//           />
//         </div>
//         <div className="py-1">
//           <div className="font-bold">{title}</div>
//           <p className="text-xs font-medium text-slate-500 mt-2">
//             {subtitle} Topics
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;

// import React from "react";
// import { Link } from "react-router-dom";

// interface CardProps {
//   title: string;
//   subtitle: string;
//   defaultImage: string;
//   activeImage: string; // Add this prop for active image
//   onClick: () => void; // Add this prop for handling clicks
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   subtitle,
//   defaultImage,
//   activeImage,
//   onClick,
// }) => {
//   return (
//     <Link to={`/lessons/${title.toLowerCase().replace(/\s+/g, "-")}`}>
//       <div
//         className="max-w-sm overflow-hidden cursor-pointer flex justify-center flex-col"
//         onClick={onClick} // Handle the click event
//       >
//         <div className="w-full flex justify-center items-center flex-col bg-white hover:bg-[#0AAC6C] transition-all rounded-3xl shadow-sm h-44 group">
//           <div className="flex justify-center items-center flex-col w-full ml-auto">
//             <img
//               className="w-[90px] object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
//               src={defaultImage}
//               alt={title}
//             />
//           </div>

//           <div className="flex justify-center items-center flex-col w-full ml-auto">
//             <img
//               className="w-[90px] object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
//               src={activeImage}
//               alt={`${title} active`}
//             />
//           </div>
//         </div>
//         <div className="py-1">
//           <div className="font-bold">{title}</div>
//           <p className="text-xs font-medium text-slate-500 mt-2">
//             {subtitle} Topics
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;

import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  subtitle: string;
  defaultImage: string;
  activeImage: string; // Add this prop for active image
  onClick: () => void; // Add this prop for handling clicks
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  defaultImage,
  activeImage,
  onClick,
}) => {
  return (
    <Link to={`/lessons/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div
        className="max-w-sm overflow-hidden cursor-pointer flex justify-center flex-col"
        onClick={onClick} // Handle the click event
      >
        <div className="w-full flex justify-center items-center bg-white hover:bg-[#0AAC6C] transition-all rounded-3xl shadow-sm h-44 relative group">
          <img
            className="w-[90px] object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute"
            src={defaultImage}
            alt={title}
          />
          <img
            className="w-[90px] object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute"
            src={activeImage}
            alt={`${title} active`}
          />
        </div>
        <div className="py-1">
          <div className="font-bold">{title}</div>
          <p className="text-xs font-medium text-slate-500 mt-2">
            {subtitle} Topics
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
