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
  const numberOfSnaps = 3;
  for (let i = 1; i <= numberOfImages; i++) {
    await client.imageStatus.create({
      data: {
        playerId: playerId,
        imageId: i,
      },
    });
  }
  const { JWT_KEY } = envSchema.parse(process.env);
  const playerToken = jwt.sign({ player: player }, JWT_KEY);
  res.json({
    playerToken: playerToken,
  });
}

const playerSchema = z.object({
  id: z.number(),
  username: z.string().min(1),
  score: z.number().gte(0),
});

const resLocalsSchema = z.object({
  player: playerSchema,
});

async function updatePlayerProcess(req: Request, res: Response) {
  const { player } = resLocalsSchema.parse(res.locals);
  const { id } = playerSchema.parse(player);
  const reqBodySchema = z.object({
    score: z.number().gte(0),
    imageId: z.number().gte(0).lte(3),
    snapId: z.number().gte(0).lte(3),
  });
  const { score, imageId, snapId } = reqBodySchema.parse(req.body);
  await client.player.update({
    where: {
      id: id,
    },
    data: {
      score: score,
    },
  });
  await client.imageStatus.update({
    where: {
      playerId_imageId: {
        playerId: id,
        imageId: imageId,
      },
    },
    data: {
      snapId: snapId,
    },
  });
  res.json({
    message: "score updated",
  });
}

export {
  sendAllPlayersData,
  sendPlayerData,
  addNewPlayer,
  updatePlayerProcess,
};
