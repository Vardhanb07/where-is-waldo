import { Router } from "express";
import asyncHandler from "express-async-handler";
import { sseHandler } from "@/src/handlers/sseHandler";
import protectSSE from "@/src/middleware/protectSse";

const sseRouter = Router();

sseRouter.get("/", asyncHandler(protectSSE), sseHandler);

export default sseRouter;
