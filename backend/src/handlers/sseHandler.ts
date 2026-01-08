import type { NextFunction, Request, Response } from "express";
import client from "../db/client";
import { eventEmitter } from "../app";
import * as z from "zod";

async function getLeaderboard() {
  try {
    const players = await client.player.findMany({
      take: 10,
      orderBy: [
        {
          score: "desc",
        },
      ],
    });
    return players;
  } catch (err: unknown) {
    return null;
  }
}

async function sseHandler(req: Request, res: Response) {
  res.writeHead(200, {
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive",
  });
  const leaderboard = await getLeaderboard();
  res.write(`data: ${JSON.stringify(leaderboard)}\n\n`);
  eventEmitter.on("update", async () => {
    const leaderboard = await getLeaderboard();
    res.write(`data: ${JSON.stringify(leaderboard)}\n\n`);
  });
  res.on("close", () => {
    res.end();
  });
}

export { sseHandler };
