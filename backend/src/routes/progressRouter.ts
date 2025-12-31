import { Router } from "express";
import parse from "../middleware/parsePlayer";
import protect from "../middleware/protectRoute";
import {
  sendPlayerProgress,
  updatePlayerProgress,
} from "../controllers/progressController";
import asyncHandler from "express-async-handler";

const progressRouter = Router();

progressRouter.use(protect);
progressRouter.use(parse);

progressRouter.get("/", asyncHandler(sendPlayerProgress));
progressRouter.put("/", asyncHandler(updatePlayerProgress));

export default progressRouter;
