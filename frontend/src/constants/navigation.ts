import {
  faChartColumn,
  faDroplet,
  faGears,
  faHistory,
  faHome,
  faInfo,
  faMap,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
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
  {
    title: "Settings",
    to: "/app/settings",
    icon: faGears,
  },
  {
    title: "Reports",
    to: "/app/reports",
    icon: faChartColumn,
  },
  {
    title: "History",
    to: "/app/history",
    icon: faHistory,
  },
];

export const topNavbarItems = [
  {
    title: "General",
    to: "general",
    icon: faInfo,
  },
  {
    title: "Live",
    to: "live",
    icon: faTv,
  },
  {
    title: "Watering",
    to: "watering",
    icon: faDroplet,
  },
  {
    title: "Data",
    to: "data",
    icon: faChartColumn,
  },
  {
    title: "History",
    to: "history",
    icon: faHistory,
  },
];
