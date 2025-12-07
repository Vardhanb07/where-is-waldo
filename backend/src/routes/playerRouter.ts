import { Router } from "express";
import {
  sendAllPlayersData,
  sendPlayerData,
  addNewPlayer,
} from "../controllers/playerController";

const playerRouter = Router();

playerRouter.get("/", sendAllPlayersData);
playerRouter.get("/:id", sendPlayerData);
playerRouter.post("/", addNewPlayer);

export default playerRouter;
