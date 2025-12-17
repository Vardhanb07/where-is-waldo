import { Request, Response } from "express";
import client from "../db/client";
import type { addNewPlayerBodyTypes } from "../utils/types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

async function sendAllPlayersData(req: Request, res: Response) {
  const allPlayers = await client.player.findMany();
  res.status(200).json({
    allPlayers: allPlayers,
  });
}

async function sendPlayerData(req: Request, res: Response) {
  const { id } = req.params;
  const playerId = parseInt(id);
  const playerData = await client.player.findUnique({
    where: {
      id: playerId,
    },
  });
  res.status(200).json({
    playerData: playerData,
  });
}

async function addNewPlayer(req: Request, res: Response) {
  let { username, score }: addNewPlayerBodyTypes = req.body;
  if (score === undefined) score = 0;
  const player = await client.player.create({
    data: {
      username: username,
      score: score,
    },
  });
  const key = process.env.JWT_KEY;
  let playerToken = null;
  if (key) {
    playerToken = jwt.sign({ player: player }, key);
  }
  res.status(201).json({
    playerToken: playerToken,
  });
}

export { sendAllPlayersData, sendPlayerData, addNewPlayer };
