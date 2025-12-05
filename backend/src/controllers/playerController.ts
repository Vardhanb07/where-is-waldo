import { Request, Response } from "express";
import client from "../db/client";

async function sendAllPlayersData(req: Request, res: Response) {
  const allPlayers = await client.player.findMany();
  res.status(200).json({
    allPlayers: allPlayers,
  });
}

export { sendAllPlayersData };
