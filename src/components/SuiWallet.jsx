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
      <div className="wallet-connection">
        <ConnectButton />
      </div>

      {/* {account && (
        <div className="account-info">
          <h3>Connected Wallet</h3>
          <p className="wallet-address">
            {account.address.slice(0, 6)}...{account.address.slice(-4)}
          </p>

          <div className="owned-objects-section">
            <h4>Owned Objects</h4>
            {isLoading ? (
              <p>Loading objects...</p>
            ) : ownedObjects?.data && ownedObjects.data.length > 0 ? (
              <ul className="object-list">
                {ownedObjects.data.map((object) => (
                  <li key={object.data?.objectId} className="object-item">
                    <a
                      href={`https://suiexplorer.com/object/${object.data?.objectId}?network=devnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="object-link"
                    >
                      {object.data?.objectId}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No objects found for this wallet</p>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
}
