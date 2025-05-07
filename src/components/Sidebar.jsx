"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: "3.png" },
    { href: "/browse-gigs", label: "Browse Gigs", icon: "/4.png" },
    { href: "/live-gigs", label: "Live Gigs", icon: "/2.png" },
    { href: "/applications", label: "Applications", icon: "/1.png" },
    { href: "/create-new-gig", label: "Create Gigs", icon: "/5.png" },
  ];

  return (
    <aside className="w-[18rem] font-plus bg-[#191c21] shadow-md h-screen">
      <div className="text-2xl p-6 text-white font-bold flex items-center space-x-2">
        <img src="/Lance@3x3.png" alt="Logo" className="w-6 h-6 app-font" />
        <span>Lancepoint</span>
      </div>
      <ul className="space-y-4 flex flex-col p-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex app-font items-center gap-3 p-4 rounded-md text-[16px] font-medium
                 ${
                pathname === link.href
                  ? "bg-black text-white"
                  : "text-white  "
              } transition-colors duration-200
              `}
            >
              <img src={link.icon} alt={`${link.label} icon`} className="w-5 h-5" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
