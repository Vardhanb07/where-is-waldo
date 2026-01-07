import jwt from "jsonwebtoken";
import * as z from "zod";
import type { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const resLocalsSchema = z.object({
  token: z.jwt(),
});

const playerSchema = z.object({
  id: z.number(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  username: z.string().min(1),
  score: z.number(),
});

const jwtDecodedSchema = z.object({
  player: playerSchema,
});

const envSchema = z.object({
  JWT_KEY: z.string().min(1),
});

async function parse(req: Request, res: Response, next: NextFunction) {
  const { JWT_KEY } = envSchema.parse(process.env);
  const { token } = resLocalsSchema.parse(res.locals);
  const { player } = jwtDecodedSchema.parse(jwt.verify(token, JWT_KEY));
  const { id, username, score } = playerSchema.parse(player);
  res.locals.player = {
    id: id,
    username: username,
    score: score,
  };
  next();
}

export default parse;
