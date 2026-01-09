import { Router } from "express";
import asyncHandler from "express-async-handler";
import { sseHandler } from "../handlers/sseHandler";
import protectSSE from "../middleware/protectSse";

const sseRouter = Router();

sseRouter.get("/", asyncHandler(protectSSE), sseHandler);

export default sseRouter;
