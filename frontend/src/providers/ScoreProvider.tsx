import { useState } from "react";
import { ScoreContext, storedScore } from "../context/ScoreContext";
import type { ScoreProviderPropTypes } from "../utils/types";

export default function ScoreProvider({ children }: ScoreProviderPropTypes) {
  const initialScore = storedScore ?? 0;
  const [score, setScore] = useState(initialScore);
  function incrementScore() {
    setScore(score + 1);
  }
  return (
    <ScoreContext value={{ score, incrementScore }}>{children}</ScoreContext>
  );
}
