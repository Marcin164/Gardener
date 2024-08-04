import TopNavbar from "../components/Navbars/TopNavbar";
import { Outlet } from "react-router-dom";

const Device = () => {
  return (
    <div className="w-full">
      <TopNavbar />
      <Outlet />
    </div>
  );
};

export default Device;
