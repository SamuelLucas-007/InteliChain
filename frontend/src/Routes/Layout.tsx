import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="max-h-screen h-screen">
        <Outlet />
      </main>
    </div>
  );
}