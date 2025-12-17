import { useNavigate } from "react-router";
import type { ProtectRoutePropTypes } from "../utils/types";
import { useEffect } from "react";

export default function ProtectRoute({ children }: ProtectRoutePropTypes) {
  const playerToken = localStorage.getItem("player-token");
  const navigate = useNavigate();
  useEffect(() => {
    if (playerToken === null) {
      navigate("/register");
    }
  }, [playerToken]);
  return children;
}
