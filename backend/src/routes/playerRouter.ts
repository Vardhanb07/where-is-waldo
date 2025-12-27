import { Router } from "express";
import {
  sendAllPlayersData,
  sendPlayerData,
  addNewPlayer,
} from "../controllers/playerController";
import protect from "../middleware/protectRoute";
import asyncHandler from "express-async-handler";

const playerRouter = Router();

playerRouter.post("/", asyncHandler(addNewPlayer));

playerRouter.use(protect);
playerRouter.get("/", asyncHandler(sendAllPlayersData));
playerRouter.get("/:id", asyncHandler(sendPlayerData));

export default playerRouter;
