import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import HomePage from "@/pages/HomePages";
import CreateNews from "@/pages/CreateNews";
import About from "@/pages/About";

function MainRoutes() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/about") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout showNavbar={showNavbar}/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNews/>} />
        <Route path="/about" element={<About />} ></Route>
      </Route>
    </Routes>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
