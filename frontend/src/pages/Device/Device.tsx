import TopNavbar from "../../components/Navbars/TopNavbar";
import { Outlet } from "react-router-dom";

const Device = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
    </>
  );
};

export default Device;
