import Navbar from "@/src/components/Navbar";
import { useTheme } from "@/src/utils/hooks";
import LeaderboardContent from "@/src/components/LeaderboardContent";
import { useEffect, useState } from "react";
import type { playerType } from "@/src/utils/types";
import clsx from "clsx";

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
      className={clsx("h-screen pt-2 font-jbmono", {
        "bg-gray-950 text-white": theme === "dark",
        "bg-white text-black": theme === "light",
      })}
    >
      <Navbar />
      <LeaderboardContent content={leaderboard} />
    </div>
  );
}
