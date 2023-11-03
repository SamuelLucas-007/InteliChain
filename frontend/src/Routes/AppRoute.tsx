import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import NewsPage from "./NewsPage";
import HomePage from "@/pages/HomePages";
import CreateNews from "@/pages/CreateNews";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/create" element={<CreateNews/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}