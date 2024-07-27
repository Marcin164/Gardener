import React from "react";
import { NavLink } from "react-router-dom";
import { navbarItems } from "../../constants/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Navbar = (props: Props) => {
  const getClassName = (isActive: boolean) => {
    return isActive ? "bg-[#6E62E5] text-[#FFFFFF]" : "bg-[#FFFFFF]";
  };

  return (
    <div className="w-[300px] h-screen">
      {navbarItems.map((navbarItem) => (
        <NavLink
          key={navbarItem.to}
          to={navbarItem.to}
          className={({ isActive }) => {
            return `${getClassName(
              isActive
            )} block py-3 px-4 w-[260px] mt-3 mr-auto ml-auto rounded`;
          }}
        >
          <span>
            <FontAwesomeIcon icon={navbarItem.icon} className="w-[30px] pr-2" />
            <span>{navbarItem.title}</span>
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
