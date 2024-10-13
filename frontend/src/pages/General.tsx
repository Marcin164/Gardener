import { getDevices } from "../api/devices";
import { useQuery } from "@tanstack/react-query";
import { getLatestData } from "../api/data";
import { getUniqueValues } from "../helpers/arrays";
import { useParams } from "react-router-dom";
import DeviceUpdateForm from "../components/Forms/DeviceUpdateForm";

const General = () => {
  const { id } = useParams();
  const deviceQuery: any = useQuery({
    queryKey: ["devices"],
    queryFn: getDevices,
  });

  const dataQuery = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      getLatestData(getUniqueValues([{ deviceId: id }], "deviceId")),
  });

  if (
    (!deviceQuery?.data && deviceQuery?.data?.length <= 0) ||
    !dataQuery?.data
  )
    return null;

  const device = deviceQuery?.data.find((device: any) => device._id === id);

  return (
    <div className="pt-4 w-[calc(100vw-316px)] flex">
      <div className="w-[60%]">
        <div className="text-[24px] font-bold">Details</div>
        <DeviceUpdateForm device={device} />
      </div>
      <div className="w-[40%] px-4">
        <div className="text-[24px] font-bold">Information</div>
        <div className="">
          <div className="py-1">
            <span className="text-[#727272]">Connection state: </span>
            <span
              className="font-medium"
              style={{ color: device.isConnected ? "#059224" : "#EE0000" }}
            >
              {device.isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
          <div className="py-1 text-[#727272]">Amount of waterings: </div>
          <div className="py-1 text-[#727272]">Last update: </div>
          <div className="py-1 text-[#727272]">Temperature: </div>
          <div className="py-1 text-[#727272]">Humidity: </div>
        </div>
      </div>
    </div>
  );
};

export default General;
