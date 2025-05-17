"use client";

import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { Toaster } from "react-hot-toast";

export function SuiKit({ children }) {
  return (
    <WalletProvider>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </WalletProvider>
  );
}
