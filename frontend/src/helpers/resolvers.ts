import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";

export const resolveDeviceIdforDevice = (devices: any, deviceId: any) => {
  const device = devices.find((device: any) => device._id === deviceId);
  return device;
};

export const resolveProblemToIcon = (problem: string) => {
  let icon: any;
  switch (problem) {
    case "temperature":
      icon = faTemperatureQuarter;
  }

  return icon;
};
