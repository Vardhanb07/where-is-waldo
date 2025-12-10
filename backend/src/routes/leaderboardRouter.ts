import { Router } from "express";

const leaderboardRouter = Router();

leaderboardRouter.get("/", (req, res) => {
  res.json({
    message: "in-progress",
  });
});

export default leaderboardRouter;
