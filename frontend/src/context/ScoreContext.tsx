import { createContext } from "react";

const initialScore = 0;

export const ScoreContext = createContext({
  score: initialScore,
  incrementScore: () => {},
});
