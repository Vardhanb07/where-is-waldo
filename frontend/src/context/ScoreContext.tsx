import { createContext } from "react";
import instance from "../utils/api";

const initialScore = 0;

async function getScore(): Promise<number | null> {
  const playerToken = localStorage.getItem("player-token");
  if (playerToken) {
    const response = await instance.get(`/player`, {
      headers: {
        Authorization: `Bearer ${playerToken}`,
      },
    });
    const { player } = response.data;
    return player.score;
  }
  return null;
}

export const storedScore = await getScore();

export const ScoreContext = createContext({
  score: initialScore,
  incrementScore: () => {},
});
