import jwt from "jsonwebtoken";
import * as z from "zod";
import type { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import client from "../db/client";

dotenv.config({ quiet: true });

const reqQuerySchema = z.object({
  token: z.jwt(),
});

const envSchema = z.object({
  JWT_KEY: z.string().min(1),
});

const playerSchema = z.object({
  id: z.number(),
});

const jwtDecodedSchema = z.object({
  player: playerSchema,
});

async function protectSSE(req: Request, res: Response, next: NextFunction) {
  const { JWT_KEY } = envSchema.parse(process.env);
  const { token } = reqQuerySchema.parse(req.query);
  const { player } = jwtDecodedSchema.parse(jwt.verify(token, JWT_KEY));
  const { id } = playerSchema.parse(player);
  const actualPlayer = await client.player.findUnique({
    where: {
      id: id,
    },
  });
  if (!actualPlayer) {
    res.status(404).json({
      message: "invalid token",
    });
  } else {
    next();
  }
}

export default protectSSE;
