import DataTable from "react-data-table-component";
import Badge from "../Badges/Badge";

type Props = {};

const HistoryTable = (props: Props) => {
  const columns = [
    {
      name: "Action",
      selector: (row: any) => (
        <div className="flex items-center">
          <div className="w-[30px] h-[30px] bg-[#6E62E5] rounded-full mr-2" />
          <div>
            <div className="font-semibold">{row.action}</div>
            <div className="text-[12px] font-light">{row.device}</div>
          </div>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row: any) => row.date,
    },
    {
      name: "Type",
      selector: (row: any) => (
        <div className="p-2">
          <Badge color="#F0F" text={row.type} />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 2,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
    {
      id: 3,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 4,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
    {
      id: 5,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 6,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
    {
      id: 7,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 8,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
    {
      id: 9,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 10,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
    {
      id: 11,
      action: "Watering",
      device: "Device 1 - Avocado",
      date: "08.08.2024 14:53",
      type: "Info",
    },
    {
      id: 12,
      action: "Bad humidity",
      device: "Device 1 - Avocado",
      date: "07.08.2024 10:23",
      type: "Warning",
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default HistoryTable;
