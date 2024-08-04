import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Badge from "../Badges/Badge";
import ComponentLoading from "../Loading/ComponentLoading";
import { useNavigate } from "react-router-dom";

type Props = {
  data?: any;
  loading: boolean;
};

const Table = ({ data = [], loading = false }: Props) => {
  const navigate = useNavigate();
  const getHumidityValue = (humidity: number) => {
    const humidityInfo = {
      text: "No data",
      color: "#4A4A4A",
    };

    switch (true) {
      case humidity < 30:
        humidityInfo.color = "#EE0000";
        humidityInfo.text = "Critical";
        break;
      case humidity < 50:
        humidityInfo.color = "#FE6B36";
        humidityInfo.text = "Warning";
        break;
      case humidity < 80:
        humidityInfo.color = "#E2B33A";
        humidityInfo.text = "Good";
        break;
      case humidity < 100:
        humidityInfo.color = "#059224";
        humidityInfo.text = "Perfect";
        break;
      default:
        break;
    }

    return humidityInfo;
  };

  const getTempratureValue = (temperature: number) => {
    const temperatureInfo = {
      text: "No data",
      color: "#4A4A4A",
    };

    switch (true) {
      case temperature < 5:
        temperatureInfo.color = "#EE0000";
        temperatureInfo.text = "Too low";
        break;
      case temperature > 30:
        temperatureInfo.color = "#EE0000";
        temperatureInfo.text = "Too high";
        break;
      case temperature >= 25 && temperature <= 30:
        temperatureInfo.color = "#FE6B36";
        temperatureInfo.text = "Warning";
        break;
      case temperature >= 5 && temperature < 10:
        temperatureInfo.color = "#FE6B36";
        temperatureInfo.text = "Warning";
        break;
      case temperature >= 10 && temperature < 25:
        temperatureInfo.color = "#059224";
        temperatureInfo.text = "Perfect";
        break;
      default:
        break;
    }

    return temperatureInfo;
  };

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("plant", {
      header: "Plant",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("city", {
      header: "City",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("street", {
      header: "Street",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("isConnected", {
      header: "Connection",
      cell: (info) => (
        <Badge
          text={info.getValue() ? "Connected" : "Disconnected"}
          color={info.getValue() ? "#059224" : "#EE0000"}
        />
      ),
    }),
    columnHelper.accessor("activity", {
      header: "Activity",
      cell: (info) => (
        <Badge
          text={info.getValue() ? "Active" : "Inactive"}
          color={info.getValue() ? "#059224" : "#EE0000"}
        />
      ),
    }),
    columnHelper.accessor("humidity", {
      header: "Soil humidity",
      cell: (info) => {
        const humidityInfo = getHumidityValue(info.getValue());
        return <Badge text={humidityInfo.text} color={humidityInfo.color} />;
      },
    }),
    columnHelper.accessor("temperature", {
      header: "Temperature",
      cell: (info) => {
        const temperatureInfo = getTempratureValue(info.getValue());
        return (
          <Badge text={temperatureInfo.text} color={temperatureInfo.color} />
        );
      },
    }),
    columnHelper.accessor("watering", {
      header: "Last watering",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <ComponentLoading />;
  return (
    <table className="w-full px-8 mt-8">
      <thead className="border-b">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-left text-[#727272] font-medium"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            className="cursor-pointer hover:bg-[#6E62E5]/25"
            key={row.id}
            onClick={() =>
              navigate(`/app/devices/device/${data[row.id].id}/general`)
            }
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="text-[#4F4F4F] py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
