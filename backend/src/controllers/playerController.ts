import { Request, Response } from "express";
import client from "../db/client";
import type { addNewPlayerBodyTypes } from "../utils/types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as z from "zod";

dotenv.config({ quiet: true });

const envSchema = z.object({
  JWT_KEY: z.string().min(1),
});

async function sendAllPlayersData(req: Request, res: Response) {
  const allPlayers = await client.player.findMany();
  res.json({
    players: allPlayers,
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
  res.json({
    player: playerData,
  });
}

async function addNewPlayer(req: Request, res: Response) {
  const { username }: addNewPlayerBodyTypes = req.body;
  const player = await client.player.create({
    data: {
      username: username,
      score: 0,
    },
  });
  const numberOfImages = 4;
  const playerId = player["id"];
  const completedSnaps = {
    1: false,
    2: false,
    3: false,
  };
  for (let i = 0; i < numberOfImages; i++) {
    await client.imageStatus.create({
      data: {
        playerId: playerId,
        completedSnaps: completedSnaps,
      },
    });
  }
  const { JWT_KEY } = envSchema.parse(process.env);
  const playerToken = jwt.sign({ player: player }, JWT_KEY);
  res.json({
    playerToken: playerToken,
    playerId: playerId,
  });
}

export { sendAllPlayersData, sendPlayerData, addNewPlayer };
