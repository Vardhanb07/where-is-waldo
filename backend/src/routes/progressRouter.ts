import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
	sendPlayerProgress,
	updatePlayerProgress,
} from "../controllers/progressController";
import parse from "../middleware/parsePlayer";
import protect from "../middleware/protectRoute";

const progressRouter = Router();

progressRouter.use(protect);
progressRouter.use(parse);

progressRouter.get("/", asyncHandler(sendPlayerProgress));
progressRouter.put("/", asyncHandler(updatePlayerProgress));

export default progressRouter;
