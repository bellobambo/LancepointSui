//  import Sidebar from "@/components/Sidebar";
import Header from "@/components/Navbar/Header";
import Footer from '@/components/footer/Footer';
import "./globals.css";

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-100 to-purple-50">
        <Header />
        <div className="flex min-h-screen bg-gray-50">
          {/* <Sidebar /> */}
          <main className="flex-1 py-4 px-4 sm:px-6 md:px-12 lg:px-20">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
