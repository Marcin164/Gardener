import { io } from "socket.io-client";

export const socket = io("ws://127.0.0.1:80", {
  transports: ["websocket"],
});

export const getData = () => {
  socket.on("connect", () => {
    console.log("Connected to the server");
  });

  socket.emit("send", (da: any) => {
    console.log("emit");
    console.log(da);
    socket.on("send", (d: any) => {
      console.log(d);
    });
  });
};
