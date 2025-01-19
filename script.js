const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty"; // Bitcoin Silver Contract
const sellerWallet = "Your_Solana_Wallet_Address"; // Replace with your wallet address to receive payments
const tokenPrice = 0.01; // Price of one Bitcoin Silver token in SOL

// Check if Phantom Wallet is installed
if (!window.solana || !window.solana.isPhantom) {
    alert("Phantom Wallet is not installed. Please install it from https://phantom.app.");
}

// Connect Phantom Wallet
document.getElementById("connect-wallet").addEventListener("click", async () => {
    try {
        const response = await window.solana.connect();
        const walletAddress = response.publicKey.toString();
        document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Failed to connect wallet. Please try again.");
    }
});

// Purchase Tokens
document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value); // Amount of tokens to buy
    const totalCost = amount * tokenPrice;

    if (!amount || amount <= 0) {
        alert("Please enter a valid token amount.");
        return;
    }

    try {
        // Connect to Solana blockchain
        const provider = window.solana;
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"), "confirmed");

        // Create the transaction
        const transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: sellerWallet,
                lamports: solanaWeb3.LAMPORTS_PER_SOL * totalCost, // Convert SOL to lamports
            })
        );

        // Sign the transaction with the user's wallet
        const { signature } = await provider.signAndSendTransaction(transaction);
        await connection.confirmTransaction(signature, "confirmed");

        document.getElementById("status").textContent = `Transaction successful! View it on Solana Explorer: https://explorer.solana.com/tx/${signature}`;
    } catch (error) {
        console.error("Transaction failed:", error);
        alert("Failed to complete the transaction. Please try again.");
    }
});