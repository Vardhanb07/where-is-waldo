import Navbar from "../components/Navbar";
import { useTheme } from "../utils/hooks";
import LeaderboardContent from "../components/LeaderboardContent";
import { useEffect, useState } from "react";
import type { playerType } from "../utils/types";

export default function Leaderboard() {
  const { theme } = useTheme();
  const [leaderboard, setLeaderboard] = useState<playerType[]>([]);
  useEffect(() => {
    const playerToken = localStorage.getItem("player-token");
    const source = new EventSource(`/api/sse?token=${playerToken}`);
    source.addEventListener("message", (event) => {
      setLeaderboard(JSON.parse(event.data));
    });
    source.addEventListener("open", () => {
      console.log("connected to source!");
    });
    source.addEventListener("error", () => {
      console.log("Something went wrong!");
    });
  }, []);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-screen pt-2 font-jbmono`}
    >
      <Navbar />
      <LeaderboardContent content={leaderboard} />
    </div>
  );
}
