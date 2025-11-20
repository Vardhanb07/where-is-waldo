import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ThemeProvider from "./context/ThemeProvider";

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
