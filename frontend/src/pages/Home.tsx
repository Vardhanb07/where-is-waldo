import HomeContent from "@/src/components/HomeContent";
import Navbar from "@/src/components/Navbar";
import { useTheme } from "@/src/utils/hooks";
import clsx from "clsx";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={clsx("h-screen pt-2", {
        "bg-gray-950 text-white selection:text-black selection:bg-white":
          theme === "dark",
        "bg-white text-black selection:text-white selection:bg-black":
          theme === "light",
      })}
    >
      <Navbar />
      <HomeContent />
    </div>
  );
}
