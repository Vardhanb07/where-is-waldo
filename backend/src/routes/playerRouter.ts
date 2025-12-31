import { Router } from "express";
import {
  sendPlayerData,
  addNewPlayer,
} from "../controllers/playerController";
import protect from "../middleware/protectRoute";
import asyncHandler from "express-async-handler";
import parse from "../middleware/parsePlayer";

const playerRouter = Router();

playerRouter.post("/", asyncHandler(addNewPlayer));

playerRouter.use(protect);
playerRouter.use(parse);
playerRouter.get("/", asyncHandler(sendPlayerData));

export default playerRouter;
