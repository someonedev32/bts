const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty";

// Check if Phantom Wallet is available
const isPhantomInstalled = window.solana && window.solana.isPhantom;

if (!isPhantomInstalled) {
    document.getElementById("wallet-address").textContent = 
        "Phantom Wallet is not detected. Please install it from https://phantom.app.";
} else {
    console.log("Phantom Wallet detected.");
}

// Handle wallet connection
document.getElementById("connect-wallet").addEventListener("click", async () => {
    if (isPhantomInstalled) {
        try {
            const response = await window.solana.connect({ onlyIfTrusted: false }); // Open Phantom Wallet popup
            const walletAddress = response.publicKey.toString(); // Get connected wallet address
            document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
        } catch (err) {
            console.error("Wallet connection failed:", err);
            alert("Wallet connection failed. Please try again.");
        }
    } else {
        // For mobile users, show Phantom Wallet download link
        const mobileDeepLink = "https://phantom.app/ul/";
        const message = `
            Please open this page in the Phantom Wallet browser. 
            Or, download Phantom Wallet from: ${mobileDeepLink}
        `;
        alert(message);
    }
});

// Placeholder for token purchase
document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    document.getElementById("status").textContent = `You are buying ${amount} Bitcoin Silver tokens...`;

    // Add blockchain transaction logic here
    alert("Token purchase functionality is under development.");
});

const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty";

document.getElementById("connect-wallet").addEventListener("click", async () => {
    try {
        const response = await window.solana.connect();
        const walletAddress = response.publicKey.toString();
        document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
    } catch (err) {
        console.error("Wallet connection failed:", err);
    }
});

document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    document.getElementById("status").textContent = `You are buying ${amount} Bitcoin Silver tokens...`;
    // Add logic to handle token purchase via Solana blockchain
});

const contractAddress = "5qfL4XnPSGGJSx4n7MVvj5kCtkuwsqBUxgBCALxgwpty";

// Ensure Phantom Wallet is available
const isPhantomInstalled = window.solana && window.solana.isPhantom;

if (!isPhantomInstalled) {
    alert("Phantom Wallet is not installed. Please install it to proceed.");
} else {
    console.log("Phantom Wallet is detected.");
}

// Wallet connection logic
document.getElementById("connect-wallet").addEventListener("click", async () => {
    if (isPhantomInstalled) {
        try {
            const response = await window.solana.connect(); // Prompts the user to connect their wallet
            const walletAddress = response.publicKey.toString(); // Get the wallet address
            document.getElementById("wallet-address").textContent = `Wallet Connected: ${walletAddress}`;
        } catch (err) {
            console.error("Wallet connection failed:", err);
            alert("Wallet connection failed. Please try again.");
        }
    }
});

// Placeholder for token purchase logic
document.getElementById("buy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    document.getElementById("status").textContent = `You are buying ${amount} Bitcoin Silver tokens...`;

    // Add blockchain transaction logic here (e.g., transferring SOL for tokens)
    alert("Token purchase functionality is under development.");
});
