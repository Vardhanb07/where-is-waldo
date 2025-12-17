import { Router } from "express";
import {
  sendAllPlayersData,
  sendPlayerData,
  addNewPlayer,
} from "../controllers/playerController";
import protect from "../middleware/protectRoute";

const playerRouter = Router();

playerRouter.post("/", addNewPlayer);

playerRouter.use(protect);
playerRouter.get("/", sendAllPlayersData);
playerRouter.get("/:id", sendPlayerData);

export default playerRouter;
