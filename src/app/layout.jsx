import BaseNoAuth from "@/components/base/withoutauth";
import "@mysten/dapp-kit/dist/index.css";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { SuiProvider } from "@/components/SuiProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <SuiProvider>
          <BaseNoAuth>{children}</BaseNoAuth>
        </SuiProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
