import { Router } from "express";
import { sendAllPlayersData } from "../controllers/playerController";

const playerRouter = Router();

playerRouter.get("/", sendAllPlayersData);

export default playerRouter;
