import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LeftSideBar from "@/components/shared/Leftsidebar";
import TopBar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full flex">
      <LeftSideBar />

      <section className="h-full w-full ml-[270px] mt-[5.5rem]">
        <TopBar />
        <div className="mx-6">
          <Breadcrumbs />
          <Outlet />
        </div>
      </section>
    </div>
  );
};
export default RootLayout;
