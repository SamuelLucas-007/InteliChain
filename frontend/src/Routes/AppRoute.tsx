import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePages";
import NewsPage from "./NewsPage";
import CreateNews from "@/pages/CreateNews";
import Viewer from "../pages/Viewer.tsx";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/create" element={<CreateNews/>} />
          <Route path="/profile" element={<Viewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}