import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
	sendPlayerProgress,
	updatePlayerProgress,
} from "@/src/controllers/progressController";
import parse from "@/src/middleware/parsePlayer";
import protect from "@/src/middleware/protectRoute";

const progressRouter = Router();

progressRouter.use(protect);
progressRouter.use(parse);

progressRouter.get("/", asyncHandler(sendPlayerProgress));
progressRouter.put("/", asyncHandler(updatePlayerProgress));

export default progressRouter;
