import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SheetPage from "./pages/sheet.page";
import CharacterSelectPage from "./pages/character-select.page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterSelectPage />} />
        <Route path="/character/:id" element={<SheetPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
