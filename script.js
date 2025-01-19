const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty"; // Token Contract Address
const sellerWallet = "7AZE5vh9jo1B6CRG3Yq7vAyfeS2ygKWAVsXL1rec15jh"; // Replace with your wallet address
const tokenPrice = 0.01; // Price of one Bitcoin Silver token in SOL

// Check if Phantom Wallet is available
function isPhantomInstalled() {
    return window.solana && window.solana.isPhantom;
}

// Detect if user is on mobile
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Show instructions for mobile users
if (!isPhantomInstalled()) {
    if (isMobile()) {
        document.getElementById("wallet-address").innerHTML = `
            <p>Please open this site inside the <a href="https://phantom.app/ul/" target="_blank">Phantom Wallet app</a>.</p>
        `;
    } else {
        document.getElementById("wallet-address").textContent = 
            "Phantom Wallet is not detected. Please install it from https://phantom.app.";
    }
} else {
    console.log("Phantom Wallet detected.");
}

// Wallet connection logic
document.getElementById("connect-wallet").addEventListener("click", async () => {
    if (!isPhantomInstalled()) {
        alert("Phantom Wallet is not installed. Please install it.");
        return;
    }

    try {
        const response = await window.solana.connect({ onlyIfTrusted: false }); // Request connection
        const walletAddress = response.publicKey.toString(); // Get connected wallet address
        document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Failed to connect wallet. Please try again.");
    }
});

// Token purchase logic (placeholder)
document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value); // Number of tokens to buy
    const totalCost = amount * tokenPrice;

    if (!amount || amount <= 0) {
        alert("Please enter a valid token amount.");
        return;
    }

    try {
        const provider = window.solana;
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"), "confirmed");

        // Create a transaction to transfer SOL
        const transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: sellerWallet,
                lamports: solanaWeb3.LAMPORTS_PER_SOL * totalCost, // Convert SOL to lamports
            })
        );

        // Sign and send the transaction
        const { signature } = await provider.signAndSendTransaction(transaction);
        await connection.confirmTransaction(signature, "confirmed");

        document.getElementById("status").textContent = `Transaction successful! View on Explorer: https://explorer.solana.com/tx/${signature}`;
    } catch (error) {
        console.error("Transaction failed:", error);
        alert("Failed to complete the transaction. Please try again.");
    }
});