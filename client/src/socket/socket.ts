import io, { Socket } from "socket.io-client";

export const socket: Socket = io("http://localhost:4444");

export function connectSocket() {
  socket.on('connect', () => {
  })
}

export function findMate() {}
