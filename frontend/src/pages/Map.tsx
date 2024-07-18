import Leaflet from "../components/Map/Leaflet";
import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../api/devices";
import { useState } from "react";
import DeviceTile from "../components/Map/DeviceTile";

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const query = useQuery({ queryKey: ["devices"], queryFn: getDevices });

  const selectMarker = (id: string | null) => {
    setSelectedMarker(id);
  };

  if (query.data && query.data?.length <= 0) return null;
  return (
    <div className="relative">
      <Leaflet data={query.data} selectMarker={selectMarker} />
      <div className="absolute bottom-[10px] pl-4 z-[10000]">
        {query.data?.map((device: any) => (
          <DeviceTile
            id={device._id}
            name={device.name}
            city={device.city}
            street={device.street}
            selectMarker={selectMarker}
            selectedMarker={selectedMarker}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
