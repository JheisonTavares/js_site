import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";

//ROUTER

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubPage from "./pages/sub_page/sub_page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subpage" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
