import { useTheme } from "../utils/hooks";
import Navbar from "../components/Navbar";
import RegisterContent from "../components/RegisterContent";

export default function Register() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-950 text-white selection:bg-white selection:text-black"
          : "bg-white text-black selection:bg-black selection:text-white"
      } h-screen pt-2`}
    >
      <Navbar />
      <RegisterContent />
    </div>
  );
}
