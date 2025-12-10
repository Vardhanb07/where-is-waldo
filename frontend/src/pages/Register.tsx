import { useTheme } from "../utils/hooks";
import Navbar from "../components/Navbar";
import RegisterContent from "../components/RegisterContent";

export default function Register() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-screen pt-2`}
    >
      <Navbar />
      <hr />
      <RegisterContent />
    </div>
  );
}
