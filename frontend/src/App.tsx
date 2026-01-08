import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ThemeProvider from "./providers/ThemeProvider";
import GameBoard from "./pages/GameBoard";
import ImageProvider from "./providers/ImageProvider";
import ImagesToBeFoundProvider from "./providers/ImagesToBeFoundProvider";
import Leaderboard from "./pages/Leaderboard";
import ProtectRoute from "./components/ProtectRoute";
import Register from "./pages/Register";
import ScoreProvider from "./providers/ScoreProvider";
import GameProgressProvider from "./providers/GameProgressProvider";

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
