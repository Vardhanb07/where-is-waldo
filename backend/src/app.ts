import EventEmitter from "node:events";
import cors from "cors";
import dotenv from "dotenv";
import type { NextFunction, Request, Response } from "express";
import express from "express";
import playerRouter from "./routes/playerRouter";
import progressRouter from "./routes/progressRouter";
import sseRouter from "./routes/sseRouter";

dotenv.config({ quiet: true });

const app = express();

export const eventEmitter = new EventEmitter();

export const corsOptions = {
	origin: process.env.ORIGIN,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
	res.redirect("/player");
});

app.use("/player", playerRouter);
app.use("/progress", progressRouter);
app.use("/sse", sseRouter);

app.use((_req: Request, res: Response) => {
	res.status(404).json({
		message: "resource not found",
	});
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.log(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
});

export default app;
