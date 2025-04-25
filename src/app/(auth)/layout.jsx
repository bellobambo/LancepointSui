// app/(auth)/layout.tsx
import "./globals.css";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
