import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home.tsx";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextPage from './pages/next_page.tsx';
import SubPage from "./pages/sub_page/sub_page.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/next",
    element: <NextPage />,
  }
])
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
