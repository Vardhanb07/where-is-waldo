import { Router } from "express";
import { sseHandler } from "../handlers/sseHandler";
import protectSSE from "../middleware/protectSse";
import asyncHandler from "express-async-handler";

const sseRouter = Router();

sseRouter.get("/", asyncHandler(protectSSE), sseHandler);

export default sseRouter;
