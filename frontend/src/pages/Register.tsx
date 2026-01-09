import { useTheme } from "@/src/utils/hooks";
import Navbar from "@/src/components/Navbar";
import RegisterContent from "@/src/components/RegisterContent";
import clsx from "clsx";

export default function Register() {
  const { theme } = useTheme();
  return (
    <div
      className={clsx("h-screen pt-2", {
        "bg-gray-950 text-white selection:bg-white selection:text-black":
          theme === "dark",
        "bg-white text-black selection:bg-black selection:text-white":
          theme === "light",
      })}
    >
      <Navbar />
      <RegisterContent />
    </div>
  );
}
