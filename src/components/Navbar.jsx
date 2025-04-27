import Link from "next/link";
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
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link
            href="/signup"
            className="bg-white text-black p-2 px-6 rounded-2xl w-[6rem]"
          >
            Sign Up
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
