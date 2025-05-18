"use client";

import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export function SuiProvider({ children }) {
  const queryClient = new QueryClient();
  const networks = {
    devnet: { url: getFullnodeUrl("devnet") },
    mainnet: { url: getFullnodeUrl("mainnet") },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="mainnet">
        <WalletProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
