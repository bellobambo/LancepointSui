import ZKLogin from "@/lib/ZKlogin";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className=" flex items-center justify-between p-6 bg-black text-white">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src="/Lance@3x3.png" />
          <span>Lancepoint</span>
        </div>
        <nav className="space-x-6">
          <ZKLogin />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
