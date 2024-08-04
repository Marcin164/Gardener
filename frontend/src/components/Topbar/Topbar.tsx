import React from "react";
import { useLocation } from "react-router-dom";
import { separateWords } from "../../helpers/arrays";

const Topbar = () => {
  const location = useLocation();
  const pathnameArray = separateWords(location.pathname);

  return (
    <div className="h-[90px] flex items-center px-4">
      <div className="capitalize text-[24px] font-bold">
        {pathnameArray[pathnameArray.length - 1]}
      </div>
    </div>
  );
};

export default Topbar;
