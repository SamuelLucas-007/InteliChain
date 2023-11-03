import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  showNavbar: boolean;
}

export default function Layout({ showNavbar }: LayoutProps) {
  return (
    <div className="w-full h-full">
      {showNavbar && <Navbar />}
      <main className="max-h-screen">
        <Outlet />
      </main>
    </div>
  );
}