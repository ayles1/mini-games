import { Socket } from "socket.io";
import { io } from "./app";
import { rooms } from "./rooms";

export function createListeners() {
  io.on("connection", (socket) => {
    handleRoomConnection(socket);
    handleRandomRoomConnection(socket);
    handleTimeSelect(socket);
    handleSettingColors(socket);
    handleMoves(socket);
    socket.on("disconnect", () => {
      console.log("A user disconnected.");
    });
  });
}

function handleRoomConnection(socket: Socket) {
  socket.on("ROOM:JOIN:PRIVATE", ({ roomId, nickname }) => {
    if (rooms.get(roomId)?.get("users").size < 2) {
      rooms.get(roomId)?.get("users").set(socket.id, nickname);
      const users = [...rooms.get(roomId)?.get("users").values()];
      socket.join(roomId);
      socket.broadcast.to(roomId).emit("ROOM:JOINED", users);
    } else {
      socket.emit("ROOM:OVERFLOW");
    }
  });
}

function handleRandomRoomConnection(socket: Socket) {
  socket.on("ROOM:JOIN:PUBLIC", async ({ nickname }) => {
    const users = rooms.get("randomQueue") as Record<string, any>;
    const usersInRoom = rooms.get(users.randomRoomId)?.get("users");
    if (users.nickname) {
      usersInRoom.set(socket.id, nickname);
      await socket.join(users.randomRoomId);
      socket.emit("ROOM:JOINED", [...usersInRoom.values()]);
      socket
        .to(users.randomRoomId)
        .emit("ROOM:OTHER_JOINED", [...usersInRoom.values()]);
      users.socket = "";
      users.randomRoomId = "";
      users.nickname = "";
    } else {
      const randomRoomId = Math.floor(Math.random() * 1000).toString();
      users.socket = socket.id;
      users.randomRoomId = randomRoomId;
      users.nickname = nickname;
      socket.join(randomRoomId);
      rooms.set(
        randomRoomId,
        new Map([["users", new Map([[socket.id, nickname]])]])
      );
    }
  });
}
function handleTimeSelect(socket: Socket) {
  socket.on("TIME:SET:REQUEST", (time: number) => {
    const roomId = [...socket.rooms.values()].pop();
    socket.broadcast.to(roomId!).emit("TIME:SET:OFFER", time);
  });
  socket.on("TIME:SET:CONFIRM", (time: number) => {
    const roomId = [...socket.rooms.values()].pop();
    socket.emit("TIME:SET", time);
    socket.to(roomId!).emit("TIME:SET:OTHER", time);
  });
  socket.on("TIME:SET:REJECT", () => {
    const roomId = [...socket.rooms.values()].pop();
    console.log("worked");
    socket.emit("CHOOSER:CHANGE");
    socket.to(roomId!).emit("CHOOSER:CHANGE");
  });
}
function handleSettingColors(socket: Socket) {
  socket.on("COLOR:SET:REQUEST", () => {
    const roomId = [...socket.rooms.values()].pop();
    const randomNum = Math.random();

    socket.emit("COLOR:SET", randomNum > 0.5 ? "white" : "black");
    socket.to(roomId!).emit("COLOR:SET", randomNum > 0.5 ? "black" : "white");
  });
}
function handleMoves(socket: Socket) {
  socket.on("TEST", (board) => {
    console.log(board);
    const roomId = [...socket.rooms.values()].pop();
    socket.to(roomId!).emit("UPDATE:BOARD", board);
  });
}
