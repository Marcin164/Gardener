import { faHome, faMap } from "@fortawesome/free-solid-svg-icons";
import { faTemperature4 } from "@fortawesome/free-solid-svg-icons/faTemperature4";

export const navbarItems = [
  {
    title: "Dashboard",
    to: "/app/dashboard",
    icon: faHome,
  },
  {
    title: "Map",
    to: "/app/map",
    icon: faMap,
  },
  {
    title: "Devices",
    to: "/app/devices",
    icon: faTemperature4,
  },
];
