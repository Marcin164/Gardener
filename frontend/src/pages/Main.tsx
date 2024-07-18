import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";

type Props = {};

const Main = (props: Props) => {
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
