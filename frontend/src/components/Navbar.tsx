import { Link } from "react-router";
import darkModeImage from "../assets/images/dark_mode.svg";
import lightModeImage from "../assets/images/light_mode.svg";
import { useTheme } from "../utils/hooks";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  return (
    <nav className="flex flex-row w-screen mb-2 p-3 text-2xl font-jbmono">
      <h1 className="flex-2">Where's waldo</h1>
      <button className="flex-1 text-center">
        <Link to="/leaderboard">Leaderboard</Link>
      </button>
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
