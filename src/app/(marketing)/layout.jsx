import Link from "next/link";
 

export default function MarketingLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-100 to-yellow-50 min-h-screen">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <div className="text-2xl font-bold">Lancepoint</div>
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
