import { Request, Response } from "express";
import client from "../db/client";
import type { addNewPlayerBodyTypes } from "../utils/types";

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
  const { username, score, imageStatus }: addNewPlayerBodyTypes = req.body;
  const { id } = await client.player.create({
    data: {
      username: username,
      score: score,
    },
  });
  for (const image of imageStatus) {
    await client.imageStatus.create({
      data: {
        snapOneStatus: image.snapOneStatus,
        snapThreeStatus: image.snapTwoStatus,
        snapTwoStatus: image.snapThreeStatus,
        playerId: id,
      },
    });
  }
  res.status(201).json({
    message: "player created!",
  });
}

export { sendAllPlayersData, sendPlayerData, addNewPlayer };
