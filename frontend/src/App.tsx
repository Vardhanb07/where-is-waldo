import { Route, Routes, BrowserRouter } from "react-router";
import Home from "@/src/pages/Home";
import NoMatch from "@/src/pages/NoMatch";
import ThemeProvider from "@/src/providers/ThemeProvider";
import GameBoard from "@/src/pages/GameBoard";
import ImageProvider from "@/src/providers/ImageProvider";
import ImagesToBeFoundProvider from "@/src/providers/ImagesToBeFoundProvider";
import Leaderboard from "@/src/pages/Leaderboard";
import ProtectRoute from "@/src/components/ProtectRoute";
import Register from "@/src/pages/Register";
import ScoreProvider from "@/src/providers/ScoreProvider";
import GameProgressProvider from "@/src/providers/GameProgressProvider";

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route
        path="image/:id"
        element={
          <ProtectRoute>
            <GameBoard />
          </ProtectRoute>
        }
      />
      <Route
        path="leaderboard"
        element={
          <ProtectRoute>
            <Leaderboard />
          </ProtectRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ImageProvider>
        <ImagesToBeFoundProvider>
          <ScoreProvider>
            <GameProgressProvider>
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
            </GameProgressProvider>
          </ScoreProvider>
        </ImagesToBeFoundProvider>
      </ImageProvider>
    </ThemeProvider>
  );
}
