import Navbar from "../components/Navbar";
import { useTheme } from "../utils/hooks";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-screen pt-2`}
    >
      <Navbar />
      <hr />
    </div>
  );
}
