import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePages";
import CreateNews from "@/pages/CreateNews";
// import Viewer from "../pages/Viewer.jsx";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateNews hashtag={['world']}/>} />
          {/* <Route path="/profile" element={<Viewer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}