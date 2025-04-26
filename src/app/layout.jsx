import BaseNoAuth from "@/components/base/withoutauth";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <BaseNoAuth>{children}</BaseNoAuth>
      </body>
    </html>
  );
}
