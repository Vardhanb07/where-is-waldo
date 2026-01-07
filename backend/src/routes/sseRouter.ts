import { Router } from "express";
import { sseHandler } from "../handlers/sseHandler";

const sseRouter = Router();

sseRouter.get("/", sseHandler);

export default sseRouter;
