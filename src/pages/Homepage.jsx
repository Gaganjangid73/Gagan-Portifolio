import React from "react";
import Slidebar from "../Component/slidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Homepage = () => {
  return (
    <div className="bg-black w-full h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-center">
        <Navbar />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-row justify-center gap-20 flex-1 overflow-hidden">
        {/* Sidebar (fixed) */}
        <div className="mt-20 sticky">
          <Slidebar />
        </div>

        {/* Scrollable Outlet */}
        <div className="flex-1 overflow-y-auto mt-20">
          <Outlet />
        </div>
      </div>
       <p className="text-white text-center mt-5 mb-5">Made By <span className="text-orange-400"> Gagan</span>  With ❤️</p>
    </div>
  );
};

export default Homepage;
