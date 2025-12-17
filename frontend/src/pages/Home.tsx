import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import { useTheme } from "../utils/hooks";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-950 text-white selection:text-black selection:bg-white"
          : "bg-white text-black selection:text-white selection:bg-black"
      } h-screen pt-2`}
    >
      <Navbar />
      <hr />
      <HomeContent />
    </div>
  );
}
