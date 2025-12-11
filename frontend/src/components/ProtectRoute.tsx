import { useNavigate } from "react-router";
import type { ProtectRoutePropTypes } from "../utils/types";
import { useEffect } from "react";

export default function ProtectRoute({ children }: ProtectRoutePropTypes) {
  const playerId = localStorage.getItem("playerId");
  const navigate  = useNavigate()
  useEffect(() => {
    if(playerId === null) {
      navigate("/register")
    }
  }, [playerId])
  return children;
}
