"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
app.use((0, cors_1.default)());
app.post("/rooms", (req, res) => {
    console.log(req);
    res.send();
});
io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message", (message) => {
        console.log(message);
        io.emit("message", message);
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected.");
    });
});
server.listen("4444", () => {
    console.log("hello world");
});
