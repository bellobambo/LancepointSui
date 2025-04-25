//  import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
