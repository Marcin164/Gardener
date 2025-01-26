import React, { useState, useEffect } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getDataInRangeByDeviceId } from "../../api/data";
import moment from "moment";

type Props = {};

const Data = (props: Props) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "data",
      selectionRange.startDate.toISOString(),
      selectionRange.endDate.toISOString(),
    ],
    queryFn: () =>
      getDataInRangeByDeviceId({
        deviceId: "668b04838fab16e520d34659",
        startDate: selectionRange.startDate,
        endDate: selectionRange.endDate,
      }),
    enabled: !!selectionRange.startDate && !!selectionRange.endDate, // Ensure the query only runs when dates are valid
  });

  const handleDateSelect = (ranges: any) => {
    const selectedStartDate = new Date(ranges.selection.startDate);
    const selectedEndDate = new Date(ranges.selection.endDate);

    // Set startDate to 00:00:00
    selectedStartDate.setHours(0, 0, 0, 0);

    // Set endDate to 23:59:59
    selectedEndDate.setHours(23, 59, 59, 999);

    const dateRange = {
      ...ranges.selection,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    };

    setSelectionRange(dateRange);
  };

  const temperatures = data?.filter(
    (datum: any) => datum.type === "temperature"
  );

  const temperatureValues = temperatures
    ? temperatures.map((temperatureDatum: any) => {
        return {
          value: temperatureDatum.value,
          timestamp: new Date(temperatureDatum.createdAt).toLocaleString(),
        };
      })
    : [];

  const soilHumidities = data?.filter(
    (datum: any) => datum.type === "soilHumidity"
  );

  const soilHumidityValues = soilHumidities
    ? soilHumidities.map((temperatureDatum: any) => {
        return {
          value: temperatureDatum.value,
          timestamp: new Date(temperatureDatum.createdAt).toLocaleString(),
        };
      })
    : [];

  return (
    <div className="w-full flex">
      <div className="w-[60%]">
        <div className="text-[24px] font-bold">Temperature</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={temperatureValues} margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="5 3" />
            <XAxis dataKey="timestamp" />
            <YAxis type="number" domain={[-30, 50]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F83A3A"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-[24px] font-bold">Soil humidity</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={soilHumidityValues} margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="5 3" />
            <XAxis dataKey="timestamp" />
            <YAxis type="number" domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#1C7CB2"
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
