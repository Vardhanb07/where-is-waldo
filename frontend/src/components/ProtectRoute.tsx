import { Navigate } from "react-router";
import type { ProtectRoutePropTypes } from "@/src/utils/types";

export default function ProtectRoute({ children }: ProtectRoutePropTypes) {
  const playerToken = localStorage.getItem("player-token");
  if (!playerToken) {
    return <Navigate to="/register" replace />;
  }
  return children;
}
