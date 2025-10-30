import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Navbar.css"

export default function PagesWithNavbar() {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>

      <div className="flex-1">
        <div className="outlet">
          <Outlet />
        </div>
        <div className="flex">
          <Footer />
        </div>
      </div>
    </div>
  );
}
