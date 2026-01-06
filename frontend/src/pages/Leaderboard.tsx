import Navbar from "../components/Navbar";
import { useTheme } from "../utils/hooks";
import LeaderboardContent from "../components/LeaderboardContent";

export default function Leaderboard() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-screen pt-2 font-jbmono`}
    >
      <Navbar />
      <LeaderboardContent />
    </div>
  );
}
