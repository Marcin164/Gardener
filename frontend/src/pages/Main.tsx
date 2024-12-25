import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import Topbar from "../components/Topbar/Topbar";
import { useEffect } from "react";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <Navbar />
      <div>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
