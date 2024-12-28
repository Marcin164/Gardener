import React from "react";

type Props = {};

const WaterUsed = (props: Props) => {
  return (
    <div className="w-[290px] border-[#B6B6B6] border rounded-xl py-2 px-4 flex">
      <div className="w-3/4">
        <div className="font-bold text-[#1C1C1C]">Working - devices</div>
        <div>
          <div className="text-[#6E62E5] text-[32px] font-semibold">
            58 litres
          </div>
          <div className="text-[14px] text-[#727272]">
            <span className="text-[#E85050] font-semibold">-3,4 litres</span> vs
            yesterday
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-[#059224]"></div>
      </div>
    </div>
  );
};

export default WaterUsed;
