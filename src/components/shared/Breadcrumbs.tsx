// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <nav aria-label="breadcrumb">
//       <ol className="breadcrumb">
//         {pathnames.length > 0 ? (
//           <li className="breadcrumb-item">
//             <Link to="/">Home</Link>
//           </li>
//         ) : (
//           <li className="breadcrumb-item active">Home</li>
//         )}

//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return isLast ? (
//             <li key={to} className="breadcrumb-item active">
//               {decodeURIComponent(value)}
//             </li>
//           ) : (
//             <li key={to} className="breadcrumb-item">
//               <Link to={to}>{decodeURIComponent(value)}</Link>
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumbs;

import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Only render breadcrumbs if the current path starts with /lessons
  if (!location.pathname.startsWith("/lessons")) {
    return null;
  }

  // Determine the link for the back arrow, but hide it on /lessons
  const backLink = pathnames.length > 1 ? "/lessons" : null;

  return (
    <div className="flex items-center gap-3">
      {/* Back Arrow: Show only if not on /lessons */}
      {backLink && (
        <NavLink to={backLink}>
          <img
            src="/assets/icons/back-arrow.svg"
            alt="Back Arrow"
            className="w-9"
          />
        </NavLink>
      )}

      {/* Breadcrumbs */}
      {pathnames.length > 1 && (
        <>
          <NavLink to="/lessons" className="text-[#374258]">
            Lessons
          </NavLink>
          <span className="text-[#868d9f]">/</span>
        </>
      )}

      {pathnames.slice(1).map((value, index) => {
        const to = `/lessons/${pathnames.slice(1, index + 2).join("/")}`;
        const isLast = index === pathnames.length - 2;

        return isLast ? (
          <span key={to} className="text-[#868d9f]">
            {decodeURIComponent(value)}
          </span>
        ) : (
          <>
            <NavLink key={to} to={to} className="text-[#374258]">
              {decodeURIComponent(value)}
            </NavLink>
            <span className="text-[#868d9f]">/</span>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

// import React from "react"; // Add this line if needed
// import { NavLink, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   // Only render breadcrumbs if the current path starts with /lessons
//   if (!location.pathname.startsWith("/lessons")) {
//     return null;
//   }

//   // Determine the link for the back arrow, but hide it on /lessons
//   const backLink = pathnames.length > 1 ? "/lessons" : null;

//   return (
//     <div className="flex items-center gap-3">
//       {/* Back Arrow: Show only if not on /lessons */}
//       {backLink && (
//         <NavLink to={backLink}>
//           <img
//             src="/assets/icons/back-arrow.svg"
//             alt="Back Arrow"
//             className="w-9"
//           />
//         </NavLink>
//       )}

//       {/* Breadcrumbs */}
//       {pathnames.length > 1 && (
//         <>
//           <NavLink to="/lessons" className="text-[#374258]">
//             Lessons
//           </NavLink>
//           <span className="text-[#868d9f]">/</span>
//         </>
//       )}

//       {pathnames.slice(1).map((value, index) => {
//         const to = `/lessons/${pathnames.slice(1, index + 2).join("/")}`;
//         const isLast = index === pathnames.length - 2;

//         return isLast ? (
//           <span key={to} className="text-[#868d9f]">
//             {decodeURIComponent(value)}
//           </span>
//         ) : (
//           <React.Fragment key={to}>
//             <NavLink to={to} className="text-[#374258]">
//               {decodeURIComponent(value)}
//             </NavLink>
//             <span className="text-[#868d9f]">/</span>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default Breadcrumbs;
