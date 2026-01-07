import type { Request, Response } from "express";
import * as z from "zod";
import client from "../db/client";
import type { completedSnapsType } from "../utils/types";
import { eventEmitter } from "../app";

const playerSchema = z.object({
  id: z.number(),
  username: z.string().min(1),
  score: z.number(),
});
const resLocalsSchema = z.object({
  player: playerSchema,
});

async function sendPlayerProgress(req: Request, res: Response) {
  const { player } = resLocalsSchema.parse(res.locals);
  const { id } = playerSchema.parse(player);
  const progress = await client.imageStatus.findMany({
    where: {
      playerId: id,
    },
  });
  res.json({
    progress: progress,
  });
}

async function updatePlayerProgress(req: Request, res: Response) {
  const reqBodySchema = z.object({
    imageId: z.number(),
    snapId: z.number(),
    score: z.number(),
  });
  const { imageId, snapId, score } = reqBodySchema.parse(req.body);
  const { player } = resLocalsSchema.parse(res.locals);
  const { id } = playerSchema.parse(player);
  await client.player.update({
    where: {
      id: id,
    },
    data: {
      score: score,
    },
  });
  const images = await client.imageStatus.findMany({
    where: {
      playerId: id,
    },
  });
  const requiredImage = images.find((image) => image.imageId === imageId - 1);
  let newCompletedSnaps = requiredImage?.completedSnaps as completedSnapsType;
  newCompletedSnaps[snapId.toString()] = true;
  await client.imageStatus.update({
    where: {
      id: requiredImage?.id,
    },
    data: {
      completedSnaps: newCompletedSnaps,
    },
  });
  eventEmitter.emit("update");
  res.json({
    message: "player progress updated!",
  });
}

export { sendPlayerProgress, updatePlayerProgress };
