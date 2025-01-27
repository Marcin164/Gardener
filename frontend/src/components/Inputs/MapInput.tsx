import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

type Props = {
  lat: number;
  lng: number;
  setValue: any;
};

const MapClickHandler = ({ selectMarker }: any) => {
  useMapEvents({
    click: (e) => selectMarker(e.latlng),
  });

  return null;
};

const MapInput = ({ lat, lng, setValue }: Props) => {
  const [position, setPosition] = useState<any>({ lat, lng });

  const selectLatLng = (latlng: any) => {
    console.log(latlng.lat);
    setValue("lat", latlng.lat, { shouldDirty: true });
    setValue("lng", latlng.lng, { shouldDirty: true });
    setPosition(latlng);
  };

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: "400px", width: "100%", cursor: "default" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler selectMarker={selectLatLng} />
      {position && <Marker position={[position?.lat, position?.lng]} />}
    </MapContainer>
  );
};

export default MapInput;
