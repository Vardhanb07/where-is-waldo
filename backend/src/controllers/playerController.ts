import { Request, Response } from "express";
import client from "../db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as z from "zod";

dotenv.config({ quiet: true });

const envSchema = z.object({
  JWT_KEY: z.string().min(1),
});

const playerSchema = z.object({
  id: z.number(),
  username: z.string().min(1),
  score: z.number(),
});

const resLocalsSchema = z.object({
  player: playerSchema,
});

async function sendPlayerData(req: Request, res: Response) {
  const { player } = resLocalsSchema.parse(res.locals);
  const { id } = playerSchema.parse(player);
  const playerData = await client.player.findUnique({
    where: {
      id: id,
    },
  });
  res.json({
    player: playerData,
  });
}

async function addNewPlayer(req: Request, res: Response) {
  const reqBodySchema = z.object({
    username: z.string(),
  });
  const { username } = reqBodySchema.parse(req.body);
  const player = await client.player.create({
    data: {
      username: username,
      score: 0,
    },
  });
  const numberOfImages = 4;
  const playerId = player["id"];
  const completedSnaps = {
    0: false,
    1: false,
    2: false,
  };
  for (let i = 0; i < numberOfImages; i++) {
    await client.imageStatus.create({
      data: {
        playerId: playerId,
        completedSnaps: completedSnaps,
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

export { sendPlayerData, addNewPlayer };
