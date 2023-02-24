import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { rooms } from "./rooms";
import { json } from "body-parser";
import { createListeners } from "./socket";

const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(json());

app.post("/rooms", (req, res) => {
  const { roomId } = req.body;
  if (!roomId) {
    if (!rooms.has("randomQueue")) {
      // rooms.set("randomQueue", new Map([["users", new Map()]]));
      rooms.set("randomQueue", {});
    }
  } else if (!rooms.has(roomId)) {
    rooms.set(roomId, new Map([["users", new Map()]]));
  }
  res.send();
});

createListeners();

server.listen("4444", () => {
  console.log("hello world");
});
