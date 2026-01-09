import { Router } from "express";
import asyncHandler from "express-async-handler";
import { addNewPlayer, sendPlayerData } from "@/src/controllers/playerController";
import parse from "@/src/middleware/parsePlayer";
import protect from "@/src/middleware/protectRoute";

const playerRouter = Router();

playerRouter.post("/", asyncHandler(addNewPlayer));

playerRouter.use(protect);
playerRouter.use(parse);
playerRouter.get("/", asyncHandler(sendPlayerData));

export default playerRouter;
