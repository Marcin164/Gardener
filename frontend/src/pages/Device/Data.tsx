import React, { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DatePicker from "../../components/Calendar/Calendar";

type Props = {};

const Data = (props: Props) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateSelect = (ranges: any) => {
    setSelectionRange({ ...ranges.selection });
  };

  return (
    <div className="w-full flex">
      <div className="w-[60%]">
        <div className="text-[24px] font-bold">Temperature</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={[]} margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="5 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F83A3A"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-[24px] font-bold">Humidity</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={[]} margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="5 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F83A3A"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-[40%] px-8">
        <DatePicker onChange={handleDateSelect} range={selectionRange} />
      </div>
    </div>
  );
};

export default Data;
