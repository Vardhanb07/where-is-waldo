import { Link } from "react-router";
import darkModeImage from "../assets/images/theme-images/dark_mode.svg";
import lightModeImage from "../assets/images/theme-images/light_mode.svg";
import { useTheme } from "../utils/hooks";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  const playerId = localStorage.getItem("player-token");
  return (
    <nav className="flex flex-row w-screen mb-2 p-3 text-2xl font-jbmono">
      <Link to="/" className="flex-2">
        Where's waldo
      </Link>
      <button className="flex-1 text-center">
        <Link to="/leaderboard">Leaderboard</Link>
      </button>
      {!playerId && (
        <button className="flex-1 text-center">
          <Link to="/register">Register</Link>
        </button>
      )}
      <div
        className="flex-1 flex justify-center items-center cursor-pointer"
        onClick={() => {
          changeTheme();
        }}
      >
        {theme === "light" ? (
          <img src={darkModeImage} alt="dark-mode-image" />
        ) : (
          <img src={lightModeImage} alt="light-mode-image" />
        )}
      </div>
    </nav>
  );
}
