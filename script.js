document.getElementById("connect-wallet").addEventListener("click", async () => {
    if (window.solana && window.solana.isPhantom) {
        try {
            // Connect to Phantom Wallet
            const response = await window.solana.connect();
            const walletAddress = response.publicKey.toString();
            document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert("Failed to connect wallet. Please try again.");
        }
    } else {
        alert("Please install Phantom Wallet.");
    }
});

const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty"; // Bitcoin Silver Contract Address
const sellerWallet = "GuHtEQ6TiAcRUP9ggJDTuBNisADZoS8BwnVK4wP4zFeg"; // Replace with your wallet address to receive payments
const tokenPrice = 0.01; // Price of one Bitcoin Silver token in SOL

// Check for wallet connection before proceeding with the purchase
document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value); // Number of tokens the user wants to buy
    const totalCost = amount * tokenPrice;

    if (!amount || amount <= 0) {
        alert("Please enter a valid token amount.");
        return;
    }

    if (window.solana && window.solana.isPhantom) {
        try {
            const provider = window.solana;
            const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"), "confirmed");

            // Create a transaction to transfer SOL to your presale wallet
            const transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: provider.publicKey,
                    toPubkey: sellerWallet,
                    lamports: solanaWeb3.LAMPORTS_PER_SOL * totalCost, // Convert SOL to lamports
                })
            );

            // Sign and send the transaction with the user's wallet
            const { signature } = await provider.signAndSendTransaction(transaction);
            await connection.confirmTransaction(signature, "confirmed");

            // After successful purchase, send the Bitcoin Silver tokens to the user
            // Example: Mint or transfer tokens based on your setup

            // Assuming you have a token transfer logic here
            const tokenTransfer = new solanaWeb3.Transaction().add(
                splToken.createTransferInstruction(
                    contractAddress, 
                    provider.publicKey, 
                    sellerWallet, 
                    amount // Sending the requested amount of Bitcoin Silver
                )
            );

            // Send Bitcoin Silver tokens to the user
            const tokenSignature = await provider.signAndSendTransaction(tokenTransfer);
            await connection.confirmTransaction(tokenSignature, "confirmed");

            document.getElementById("status").textContent = `Purchase successful! View your transaction on the Solana Explorer: https://explorer.solana.com/tx/${signature}`;
        } catch (error) {
            console.error("Transaction failed:", error);
            alert("Failed to complete the purchase. Please try again.");
        }
    } else {
        alert("Please install Phantom Wallet.");
    }
});

const splToken = require('@solana/spl-token');

// Assuming you have the necessary account setup for token transfer
const tokenTransferInstruction = splToken.createTransferInstruction(
    contractAddress, 
    presaleWalletAddress, // Your wallet holding the Bitcoin Silver tokens
    buyerWalletAddress, // User's wallet
    amount // Tokens to transfer
);
