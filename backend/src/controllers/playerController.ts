import { Request, Response } from "express";
import client from "../db/client";
import type { addNewPlayerBodyTypes } from "../utils/types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as z from "zod";

dotenv.config({ quiet: true });

const envSchema = z.object({
  key: z.string().min(1),
});

async function sendAllPlayersData(req: Request, res: Response) {
  const allPlayers = await client.player.findMany();
  res.json({
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
  res.json({
    playerData: playerData,
  });
}

async function addNewPlayer(req: Request, res: Response) {
  let { username }: addNewPlayerBodyTypes = req.body;
  const player = await client.player.create({
    data: {
      username: username,
      score: 0,
    },
  });
  const playerId = player["id"];
  const numberOfImages = 3;
  for (let i = 1; i <= numberOfImages; i++) {
    await client.imageStatus.create({
      data: {
        playerId: playerId,
        imageId: i,
      },
    });
  }
  const { key } = envSchema.parse(process.env);
  const playerToken = jwt.sign({ player: player }, key);
  res.json({
    playerToken: playerToken,
  });
}

export { sendAllPlayersData, sendPlayerData, addNewPlayer };
