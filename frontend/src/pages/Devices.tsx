import Table from "../components/Tables/Table";
import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../api/devices";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Buttons/Button";
import { getLatestData } from "../api/data";
import { getUniqueValues, mergeDataWithDevices } from "../helpers/arrays";

const Devices = () => {
  const deviceQuery = useQuery({ queryKey: ["devices"], queryFn: getDevices });
  const dataQuery = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      getLatestData(
        getUniqueValues([{ deviceId: "668b04838fab16e520d34659" }], "deviceId")
      ),
  });

  if (!deviceQuery?.data && deviceQuery?.data?.length <= 0 && dataQuery?.data)
    return null;

  return (
    <div className="w-[calc(100vw-300px)] pl-4 pr-8 relative">
      <div className="flex justify-between">
        <div></div>
        <Button icon={faPlus} text="Add device" onClick={() => {}} />
      </div>
      <Table
        data={mergeDataWithDevices(dataQuery?.data, deviceQuery?.data)}
        loading={dataQuery?.isPending || deviceQuery?.isPending}
      />
    </div>
  );
};

export default Devices;
