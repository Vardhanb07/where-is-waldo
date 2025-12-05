import express from "express";
import type { Request, Response } from "express";
import playerRouter from "./routes/playerRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "In-progress",
  });
});

app.use("/player", playerRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "resource not found",
  });
});

export default app;
