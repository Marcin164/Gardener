type Props = {};

const WorkingDevices = (props: Props) => {
  return (
    <div className="w-[290px] border-[#B6B6B6] border rounded-xl py-2 px-4 flex">
      <div className="w-3/4">
        <div className="font-bold text-[#1C1C1C]">Working - devices</div>
        <div className="flex my-2">
          <div className="w-[25px] h-[25px] rounded-full bg-[#059224] mr-1"></div>
          <div className="text-[#059224] font-semibold">1 Connected</div>
        </div>
        <div className="flex my-2">
          <div className="w-[25px] h-[25px] rounded-full bg-[#E85050] mr-1"></div>
          <div className="text-[#E85050] font-semibold">1 Disconnected</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-[#059224]"></div>
      </div>
    </div>
  );
};

export default WorkingDevices;
