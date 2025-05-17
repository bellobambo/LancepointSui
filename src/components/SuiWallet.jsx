"use client";

import {
  ConnectButton,
  useCurrentAccount,
  useSuiClientQuery,
} from "@mysten/dapp-kit";

export function SuiWalletIntegration() {
  const account = useCurrentAccount();
  const { data: ownedObjects, isLoading } = useSuiClientQuery(
    "getOwnedObjects",
    { owner: account?.address || "" },
    { enabled: !!account } // Only query when account is connected
  );

  return (
    <div className="sui-wallet-container">
      <div className="wallet-connection ">
        <ConnectButton />
      </div>

      {account && (
        <div className="account-info">
          <p className="wallet-address text-black">
            {account.address.slice(0, 6)}...{account.address.slice(-4)}
          </p>
        </div>
      )}
    </div>
  );
}
