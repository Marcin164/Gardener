import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveProblemToIcon } from "../../helpers/resolvers";

type Props = {
  name: string;
  plant: string;
  errors: any;
};

const DeviceCard = ({ name, plant, errors }: Props) => {
  console.log(errors);
  return (
    <div className="max-w-[300px] border-[#B6B6B6] border rounded-xl py-2 px-4">
      <div className="font-bold text-[#1C1C1C]">{`${name} - ${plant}`}</div>
      <div className="flex py-2">
        {errors &&
          errors.length > 0 &&
          errors.map((error: any) => (
            <div className="w-[40px] h-[40px] rounded-full border border-[#B6B6B6] mr-1 flex justify-center items-center">
              <FontAwesomeIcon
                icon={resolveProblemToIcon(error.type)}
                className="text-[28px]"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DeviceCard;
