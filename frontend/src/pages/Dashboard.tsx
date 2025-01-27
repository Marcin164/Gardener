import { Link } from "react-router-dom";
import DeviceCard from "../components/DashboardCards/DeviceCard";
import WaterUsed from "../components/DashboardCards/WaterUsed";
import WorkingDevices from "../components/DashboardCards/WorkingDevices";
import HistoryTable from "../components/Tables/HistoryTable";
import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../api/devices";
import { getDevicesProblems } from "../api/data";
import { resolveDeviceIdforDevice } from "../helpers/resolvers";
import { useAuthInfo } from "@propelauth/react";

type Props = {};

const Dashboard = (props: Props) => {
  const authInfo = useAuthInfo();
  const deviceQuery = useQuery({
    queryKey: ["devices"],
    queryFn: () => getDevices(authInfo.accessToken),
  });

  const deviceIds = deviceQuery.data?.map((device: any) => device._id) || [];

  const problemsQuery = useQuery({
    queryKey: ["problems", deviceIds], // Klucz zależny od deviceIds
    queryFn: () => getDevicesProblems(authInfo.accessToken, deviceIds),
    enabled: deviceIds.length > 0, // Zapytanie działa tylko, gdy mamy deviceIds
  });

  return (
    <div>
      <div>
        <div className="capitalize text-[24px] font-bold my-4">
          Devices problems
        </div>
        {problemsQuery.data &&
          problemsQuery.data.length > 0 &&
          problemsQuery.data.map((device: any) => (
            <DeviceCard
              key={device.deviceId}
              name={
                resolveDeviceIdforDevice(deviceQuery.data, device.deviceId).name
              }
              plant={
                resolveDeviceIdforDevice(deviceQuery.data, device.deviceId)
                  .plant
              }
              errors={device.problems}
            />
          ))}
      </div>
      <div>
        <div className="capitalize text-[24px] font-bold my-4">General</div>
        <div className="grid grid-cols-4 gap-4">
          <WorkingDevices />
          <WaterUsed />
        </div>
      </div>
      <div>
        <div className="capitalize text-[24px] font-bold my-4">
          Events history
        </div>
        <div className="w-[650px]">
          <HistoryTable />
          <div className="my-4 text-center">
            <Link
              to="/app/history"
              className="font-medium text-[#6E62E5] text-[20px]"
            >
              Show full history
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
