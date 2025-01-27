type Props = {
  text?: string;
  color?: string;
};

const Badge = ({ text = "", color = "#727272" }: Props) => {
  return (
    <div className="w-fit px-2 py-1 flex items-center shadow-badge rounded-full bg-white">
      <div
        className="w-[8px] h-[8px] rounded-full"
        style={{ background: color }}
      />
      <div className="pl-2 pr-1 text-[12px]" style={{ color: color }}>
        {text}
      </div>
    </div>
  );
};

export default Badge;
