import {Server, Socket} from "socket.io";
import {io} from "./app";
import {activeSockets, rooms, test} from "./rooms";



export function createListeners() {

  // const activeSockets:any = {}
  io.on("connection", (socket) => {

  //   socket.on('authenticate',({token})=>{
  //
  //     if(token){
  //       activeSockets[token] = token
  //
  //       socket.emit('authenticated')
  //     }else{
  //       socket.emit('unauthorized',{message:'Invalid session token'})
  //     }
  //   })
    console.log(socket.id)
    console.log(socket.rooms)
    handleUserSession(socket)
    handleRoomConnection(socket);
    handleRandomRoomConnection(socket);
    handleTimeSelect(socket);
    handleSettingColors(socket);
    handleMoves(socket);
    handleCheckAndMate(socket);
    socket.on("disconnect", () => {
      const roomId = [...socket.rooms.values()].pop();
      rooms.get(roomId!)?.clear();
      console.log(`A ${socket.id} disconnected.`);
    });
  });
}

function handleUserSession(socket:Socket) {
  socket.on('session', (sessionId)=>{
    test
  })
}
function handleUserDisconnect() {}
function handleRoomConnection(socket: Socket) {
  socket.on("ROOM:JOIN:PRIVATE", ({ roomId, nickname }) => {
    if (rooms.get(roomId)?.get("users").size < 2) {
      rooms.get(roomId)?.get("users").set(socket.id, nickname);
      const users = [...rooms.get(roomId)?.get("users").values()];
      socket.join(roomId);
      socket.emit("ROOM:JOINED", users);
      socket.to(roomId).emit("ROOM:JOINED", users);
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
        .emit("ROOM:JOINED", [...usersInRoom.values()]);
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
    socket.to(roomId!).emit("TIME:SET", time);
  });
  socket.on("TIME:SET:REJECT", () => {
    const roomId = [...socket.rooms.values()].pop();
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
  socket.on("TEST", ({ prevCell, nextCell }) => {
    const roomId = [...socket.rooms.values()].pop();
    socket.to(roomId!).emit("UPDATE:BOARD", { prevCell, nextCell });
  });
}
function handleCheckAndMate(socket: Socket) {
  socket.on("TOGGLE:CHECK", (data: boolean) => {
    const roomId = [...socket.rooms.values()].pop();
    socket.to(roomId!).emit("CHECK", data);
  });
  socket.on("SET:MATE", () => {
    const roomId = [...socket.rooms.values()].pop();
    socket.to(roomId!).emit("MATE");
  });
}




