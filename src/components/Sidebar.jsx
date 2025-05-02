"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/browse-gigs", label: "Browse Gigs" },
    { href: "/live-gigs", label: "Live Gigs" },
    { href: "/applications", label: "Applications" },
    { href: "/create-new-gig", label: "Create Gigs" },
  ];

  return (
    <aside className="w-[18rem] bg-black shadow-md h-screen">
      <ul className="space-y-6 flex flex-col p-5">
        <li className="flex items-center justify-center h-[9rem]"></li>

        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex items-center gap-2 p-4 rounded-md text-[16px] font-medium ${
                pathname === link.href
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } transition-colors duration-200`}
            >
              {link.icon && link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CreateGig() {
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.3552 22 21.7272 17.7905 21.9877 12.4999C22.0013 12.2241 21.7761 12 21.5 12H12.5C12.2239 12 12 11.7761 12 11.5V2.5C12 2.22386 11.7759 1.9987 11.5001 2.01228C6.20948 2.27276 2 6.64479 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="black"
      stroke-width="1.5"
    />
    <path
      d="M21.9846 9.49991C21.7367 5.47997 18.52 2.26332 14.5001 2.01538C14.2245 1.99838 14 2.22386 14 2.5V9.5C14 9.77614 14.2239 10 14.5 10H21.5C21.7761 10 22.0016 9.77553 21.9846 9.49991Z"
      stroke="black"
      stroke-width="1.5"
    />
  </svg>;
}
