import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ThemeProvider from "./providers/ThemeProvider";
import GameBoard from "./pages/GameBoard";
import ImageProvider from "./providers/ImageProvider";
import ImagesToBeFoundProvider from "./providers/ImagesToBeFoundProvider";

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="image/:id" element={<GameBoard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ImageProvider>
        <ImagesToBeFoundProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ImagesToBeFoundProvider>
      </ImageProvider>
    </ThemeProvider>
  );
}
