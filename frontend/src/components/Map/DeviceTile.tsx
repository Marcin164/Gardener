import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  id: string;
  name: string;
  city: string;
  street: string;
  selectedMarker: any;
  selectMarker: any;
};

const DeviceTile = ({
  id,
  name,
  city,
  street,
  selectedMarker,
  selectMarker,
}: Props) => {
  return (
    <div
      key={id}
      className={`cursor-pointer inline-block mr-4 rounded-[10px] border-[2px] bg-[#FFFFFF] w-[160px] h-[100px] ${
        selectedMarker === id
          ? "border-[#6E62E5] shadow-xl"
          : "border-[#FFFFFF] shadow"
      }`}
      onClick={() => selectMarker(id)}
    >
      <div className="font-bold text-[#6E62E5] w-full p-2">{name}</div>
      <div className="flex items-center px-2">
        <div>
          <FontAwesomeIcon
            icon={faLocationPin}
            className="text-[40px] text-[#6E62E5]"
          />
        </div>
        <div className="ml-2">
          <div>{city}</div>
          <div>{street}</div>
        </div>
      </div>
    </div>
  );
};

export default DeviceTile;
