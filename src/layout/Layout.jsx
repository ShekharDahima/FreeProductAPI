

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Header/>

      <Outlet/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}