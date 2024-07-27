import React from "react";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  return (
    <div className="h-[90px] flex items-center px-4">
      <div className="capitalize text-[24px] font-bold">
        {location.pathname.slice(5)}
      </div>
    </div>
  );
};

export default Topbar;
