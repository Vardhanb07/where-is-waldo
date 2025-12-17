import { Server } from "socket.io";
import { createServer } from "node:http";
import app, { corsOptions } from "./app";

export const server = createServer(app);
export const io = new Server(server, {
  cors: corsOptions,
});
