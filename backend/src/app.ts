import express from "express";
import type { NextFunction, Request, Response } from "express";
import cors from "cors";
import playerRouter from "./routes/playerRouter";
import leaderboardRouter from "./routes/leaderboardRouter";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const app = express();

export const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.redirect("/player");
});

app.use("/player", playerRouter);
app.use("/leaderboard", leaderboardRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;
