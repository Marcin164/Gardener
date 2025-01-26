import { Link } from "react-router-dom";
import DeviceCard from "../components/DashboardCards/DeviceCard";
import WaterUsed from "../components/DashboardCards/WaterUsed";
import WorkingDevices from "../components/DashboardCards/WorkingDevices";
import HistoryTable from "../components/Tables/HistoryTable";
import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../api/devices";
import { getDevicesProblems, getLatestData } from "../api/data";
import { resolveDeviceIdforDevice } from "../helpers/resolvers";

type Props = {};

const Dashboard = (props: Props) => {
  const deviceQuery = useQuery({ queryKey: ["devices"], queryFn: getDevices });

  const deviceIds = deviceQuery.data?.map((device: any) => device._id) || [];

  const problemsQuery = useQuery({
    queryKey: ["problems", deviceIds], // Klucz zależny od deviceIds
    queryFn: () => getDevicesProblems(deviceIds),
    enabled: deviceIds.length > 0, // Zapytanie działa tylko, gdy mamy deviceIds
  });

  return (
    <div>
      <div>
        <div className="capitalize text-[24px] font-bold my-4">
          Devices problems
        </div>
        {problemsQuery.data &&
          problemsQuery.data.map((device: any) => (
            <DeviceCard
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
