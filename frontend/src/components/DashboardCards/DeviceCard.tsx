import React from "react";

type Props = {};

const DeviceCard = (props: Props) => {
  return (
    <div className="w-[180px] border-[#B6B6B6] border rounded-xl py-2 px-4">
      <div className="font-bold text-[#1C1C1C]">Device - avocado</div>
      <div className="flex py-2">
        <div className="w-[25px] h-[25px] rounded-full bg-[#F0F] mr-1"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-[#F00] mr-1"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-[#F0FF0F] mr-1"></div>
      </div>
    </div>
  );
};

export default DeviceCard;
