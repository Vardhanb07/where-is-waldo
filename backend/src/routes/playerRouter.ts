import { Router } from "express";
import asyncHandler from "express-async-handler";
import { addNewPlayer, sendPlayerData } from "../controllers/playerController";
import parse from "../middleware/parsePlayer";
import protect from "../middleware/protectRoute";

const playerRouter = Router();

playerRouter.post("/", asyncHandler(addNewPlayer));

playerRouter.use(protect);
playerRouter.use(parse);
playerRouter.get("/", asyncHandler(sendPlayerData));

export default playerRouter;
