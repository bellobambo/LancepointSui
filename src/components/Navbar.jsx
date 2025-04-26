import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className=" flex items-center justify-between p-6 bg-black text-white">
        <div className="text-2xl font-bold">Lancepoint</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
