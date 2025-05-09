import React, { useState, useEffect } from "react";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { useZkLogin } from "use-sui-zklogin";
import { Transaction } from "@mysten/sui/transactions";

// Initialize Sui client
const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

const TransferTokenModal = () => {
  const { isLoaded, address } = useZkLogin({
    urlZkProver: "https://prover-dev.mystenlabs.com/v1",
    generateSalt: async () => {
      return { salt: window.crypto.getRandomValues(new Uint32Array(1))[0] };
    },
  });

  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [status, setStatus] = useState("");
  const [balance, setBalance] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      setBalance(null);
      return;
    }
    suiClient
      .getBalance({ owner: address })
      .then((result) => setBalance(Number(result.totalBalance)))
      .catch(() => setBalance(null));
  }, [address]);

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!address || !amount || !recipient) {
      setStatus("Please connect and fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const tx = new Transaction();

      const [coin] = tx.splitCoins(tx.gas, [BigInt(amount)]);

      tx.transferObjects([coin], tx.pure.address(recipient));

      const result = await signTransaction({
        transaction: tx,
        options: {
          showInput: true,
          showEffects: true,
          showEvents: true,
        },
      });

      await suiClient.waitForTransactionBlock({ digest: result.digest });

      setStatus(`✅ Success! Tx digest: ${result.digest}`);
      setAmount("");
      setRecipient("");

      const balanceResult = await suiClient.getBalance({ owner: address });
      setBalance(Number(balanceResult.totalBalance));
    } catch (error) {
      console.log("Transfer error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-black text-white py-2 px-4 rounded-lg cursor-pointer"
      >
        Transfer SUI
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4 border border-black">
            <h2 className="text-xl font-semibold text-start">Send SUI</h2>

            <div className="text-sm">
              <strong>Current Balance:</strong>{" "}
              {balance !== null
                ? `${balance} MIST (${balance / 1_000_000_000} SUI)`
                : address
                ? "Loading..."
                : "Not connected"}
            </div>

            <form onSubmit={handleTransfer}>
              <label className="text-[14px]">Amount (MIST)</label>
              <input
                type="number"
                className="w-full border-black border p-2 rounded-md placeholder:text-xs mb-2"
                placeholder="Amount (1 SUI = 1,000,000,000 MIST)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <label className="text-[14px]">Recipient Address</label>
              <input
                className="w-full border-black border p-2 rounded-md placeholder:text-xs mb-2"
                placeholder="SUI address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />

              <button
                type="submit"
                disabled={!isLoaded || loading}
                className="w-full bg-black text-white py-2 rounded-xl font-semibold text-[14px] cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send SUI"}
              </button>
            </form>

            {status && (
              <div
                className={`text-sm mt-2 ${
                  status.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </div>
            )}

            <button
              onClick={() => {
                setShowModal(false);
                setStatus("");
                setLoading(false);
              }}
              className="mt-4 w-full bg-white border border-black text-black py-2 rounded-xl font-semibold text-[14px] cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TransferTokenModal;
