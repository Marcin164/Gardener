import React, { useEffect, useState } from "react";
import { socket } from "../api/websocket";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

const Live = () => {
  const [temperatureData, setTemperatureData] = useState<any[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected with ws");
    });

    socket.emit("subscribe-data");

    // Listen for incoming data
    socket.on("recieve-data", (d: any) => {
      setTemperatureData((prevData) => {
        const updatedData = [...prevData, d];
        if (updatedData.length > 20) {
          updatedData.shift();
        }
        return updatedData;
      });
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.on("disconnect", () => {});
      socket.off("recieve-data"); // Clean up the event listener
      socket.off("subscribe-data"); // Clean up the event listener
      socket.off("connect"); // Clean up the connection listener
      setTemperatureData([]); // Reset the temperature data 6941812780770
    };
  }, []);

  return (
    <div className="pt-4 w-[calc(100vw-316px)]">
      <div className="text-[24px] font-bold">Temperature</div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={temperatureData} margin={{ top: 5, bottom: 5 }}>
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
      <RadialBarChart
        width={730}
        height={250}
        data={[]}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey=""
        />
      </RadialBarChart>
    </div>
  );
};

export default Live;
