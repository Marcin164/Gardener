import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  data: any;
  selectMarker: any;
};

const MapClickHandler = (props: any) => {
  useMapEvents({
    click: () => props.selectMarker(null),
  });

  return null;
};

const Leaflet = ({ data = [], selectMarker }: Props) => {
  return (
    <MapContainer
      center={[51, 16.9]}
      zoom={10}
      style={{ height: "calc(100vh - 90px)", width: "calc(100vw - 300px)" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler selectMarker={selectMarker} />
      {data.map((d: any) => (
        <Marker
          key={d._id}
          position={[d.lat, d.lng]}
          eventHandlers={{
            click: () => selectMarker(d._id),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default Leaflet;
