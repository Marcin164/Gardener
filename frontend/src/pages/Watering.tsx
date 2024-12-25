import React from "react";
import Input from "../components/Inputs/Input";

type Props = {};

const Watering = (props: Props) => {
  return (
    <div className="pt-4 w-[calc(100vw-316px)]">
      <div className="pt-2 pl-4">
        <div className="text-[24px] font-bold">Manual watering</div>
        <div>
          <Input
            name="amountOfWater"
            label="Amount of water"
            unit="ml"
            inputClassName="w-[120px]"
            type="number"
          />
        </div>
      </div>
      <div className="pt-2 pl-4">
        <div className="text-[24px] font-bold">Automatic watering</div>
        <div>
          <Input
            name="humidityTrigger"
            label="Trigger on humidity"
            unit="humidity"
            inputClassName="w-[120px]"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default Watering;
