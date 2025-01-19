
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
