import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/assets/images/Afrilearn-White-Logo.png";

const LeftSideBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img src={Logo} width={170} height={55} />
        </Link>

        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-[#0AAC6C] hover:bg-[#0AAC6C]"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default LeftSideBar;
