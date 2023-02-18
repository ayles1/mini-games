import { io } from "./app";
import { rooms } from "./rooms";

export function createListeners() {
  io.on("connection", (socket) => {
    socket.on("ROOM:JOIN", (data) => {
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected.");
    });
  });
}
