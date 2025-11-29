import { Link } from "react-router";
import darkModeImage from "../assets/images/theme-images/dark_mode.svg";
import lightModeImage from "../assets/images/theme-images/light_mode.svg";
import { useTheme } from "../utils/hooks";
import { useEffect, useState } from "react";

export default function GameNavbar() {
  const { theme, changeTheme } = useTheme();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let timeInSeconds = seconds;
      let timeInMinutes = minutes;
      let timeInHours = hours;
      timeInSeconds++;
      setSeconds(timeInSeconds);
      if (timeInSeconds === 60) {
        timeInMinutes++;
        setSeconds(0);
        setMinutes(timeInMinutes);
      }
      if (timeInMinutes === 60) {
        timeInHours++;
        setMinutes(0);
        setHours(timeInHours);
      }
    }, 1000);
  }, [hours, minutes, seconds]);
  return (
    <nav className="flex flex-row w-screen mb-2 p-3 text-2xl font-jbmono">
      <Link to="/" className="flex-3">
        Where's waldo
      </Link>
      <div className="flex-1">
        <p>
          Time elapsed: {hours}:{minutes}:{seconds}
        </p>
      </div>
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
