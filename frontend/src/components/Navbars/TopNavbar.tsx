import React from "react";
import { NavLink } from "react-router-dom";
import { topNavbarItems } from "../../constants/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const TopNavbar = (props: Props) => {
  const getClassName = (isActive: boolean) => {
    return isActive ? "bg-[#6E62E5] text-[#FFFFFF]" : "bg-[#FFFFFF]";
  };

  return (
    <div className="flex">
      {topNavbarItems.map((navbarItem) => (
        <NavLink
          key={navbarItem.to}
          to={navbarItem.to}
          className={({ isActive }) => {
            return `${getClassName(
              isActive
            )} block py-1 pl-2 pr-4 mt-3 mr-2 rounded`;
          }}
        >
          <span>
            <FontAwesomeIcon icon={navbarItem.icon} className="w-[30px]" />
            <span>{navbarItem.title}</span>
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default TopNavbar;
