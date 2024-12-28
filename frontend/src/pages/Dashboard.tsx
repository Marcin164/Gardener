import DeviceCard from "../components/DashboardCards/DeviceCard";
import WaterUsed from "../components/DashboardCards/WaterUsed";
import WorkingDevices from "../components/DashboardCards/WorkingDevices";
import HistoryTable from "../components/Tables/HistoryTable";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div>
        <div className="capitalize text-[24px] font-bold my-4">
          Devices problems
        </div>
        <DeviceCard />
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
        <HistoryTable />
        <div>Show full history</div>
      </div>
    </div>
  );
};

export default Dashboard;
