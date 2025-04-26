"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Browse Gigs", href: "/freelancer/jobs" },
  { label: "My Gigs", href: "/freelancer/projects" },
  { label: "Post Job", href: "/client/post-job" },
  { label: "Disputes", href: "/disputes" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="h-screen w-64 bg-[171923] border-r shadow-md flex flex-col" style={{backgroundColor: '#171923'}}>
      <div className="p-6 text-2xl font-bold text-blue-600">Lancepoint</div>
      <nav className="flex-1 px-4 space-y-2 mt-4"> 
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-3 rounded-lg text-gray-700 font-medium ${
              path === item.href
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
