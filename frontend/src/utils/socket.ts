import { io } from "socket.io-client";

const URL = import.meta.env.VITE_SERVER_URI

export const socket = io(URL)