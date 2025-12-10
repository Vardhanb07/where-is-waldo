import { useNavigate } from "react-router";
import type { ProtectRoutePropTypes } from "../utils/types";

export default function ProtectRoute({ children }: ProtectRoutePropTypes) {
  const playerId = localStorage.getItem("playerId");
  const navigate = useNavigate();
  if (playerId === null) {
    navigate("/register");
  }
  return children;
}
