<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Wallet Dashboard</title>
  <style>
    body {
      background: #0d1117;
      color: #fff;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
    }
    .container {
      background: #161b22;
      border-radius: 12px;
      padding: 30px 40px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      max-width: 800px;
      text-align: center;
      margin-bottom: 30px;
    }
    .chart-container {
      background: #161b22;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      width: 100%;
      margin-bottom: 20px;
    }
    button {
      color: white;
      padding: 15px 30px;
      font-size: 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }
    .wallet-info {
      margin-top: 20px;
      font-size: 14px;
      word-break: break-all;
    }
    .balance {
      margin-top: 20px;
      font-size: 26px;
      font-weight: bold;
      color: #39ff14;
    }
    .button-container {
      margin-bottom: 20px;
    }
    .low-button {
      background-color: #28a745; /* Green for Low */
      width: 200px;
      font-size: 20px;
    }
    .high-button {
      background-color: #dc3545; /* Red for High */
      width: 200px;
      font-size: 20px;
    }
    .low-button:hover {
      background-color: #218838;
    }
    .high-button:hover {
      background-color: #c82333;
    }
    /* Login Form Styles */
    .login-container {
      background: #161b22;
      border-radius: 12px;
      padding: 30px 40px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      max-width: 400px;
      text-align: center;
      margin-top: 100px;
    }
    .login-input {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #1e2328;
      color: #fff;
    }
    .login-button {
      width: 100%;
      padding: 15px;
      background: #1f6feb;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- Login Form -->
  <div class="login-container" id="loginForm">
    <h2>Login</h2>
    <input type="email" id="username" class="login-input" placeholder="Email" />
    <input type="password" id="password" class="login-input" placeholder="Password" />
    <button class="login-button" onclick="login()">Login</button>
    <div id="loginError" style="color: red; margin-top: 10px;"></div>
  </div>

  <!-- Wallet Dashboard (Initially Hidden) -->
  <div class="container" id="walletDashboard" style="display: none;">
    <h2>Wallet Dashboard</h2>
    <div id="walletAddress" class="wallet-info">Not connected</div>
    <div class="balance">Balance: $5,000,000.00 USD</div>
    <div style="margin-top:10px;">Token: <strong>RichToken (RICH)</strong></div>
    <button onclick="connectWallet()">Connect Wallet</button>
  </div>

  <!-- Buttons for Low and High -->
  <div class="button-container" id="buttonContainer" style="display: none;">
    <button class="low-button" onclick="setPriceLow()">Low</button>
    <button class="high-button" onclick="setPriceHigh()">High</button>
  </div>

  <!-- Bitcoin Live Chart Embed -->
  <div class="chart-container" id="chartContainer" style="display: none;">
    <h3>Live Bitcoin Chart</h3>
    <iframe 
      src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_3a4f1&symbol=BINANCE%3ABTCUSDT&interval=5&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=Dark&style=1&timezone=America%2FNew_York"
      width="100%" 
      height="500" 
      frameborder="0" 
      allowtransparency="true">
    </iframe>
  </div>

  <script>
    // Function to handle login
    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Check credentials
      if (username === "user43@wallet.com" && password === "wallet43") {
        // Hide the login form and show the wallet dashboard and other content
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("walletDashboard").style.display = "block";
        document.getElementById("buttonContainer").style.display = "block";
        document.getElementById("chartContainer").style.display = "block";
      } else {
        // Show error message if credentials are incorrect
        document.getElementById("loginError").innerText = "Invalid username or password!";
      }
    }

    // Function for Wallet Connection
    async function connectWallet() {
      if (window.solana && window.solana.isPhantom) {
        try {
          const response = await window.solana.connect();
          document.getElementById('walletAddress').innerText = `Connected: ${response.publicKey.toString()}`;
        } catch (err) {
          alert('Connection rejected');
        }
      } else {
        alert('Phantom Wallet not found. Use Phantom browser extension or mobile browser.');
      }
    }

    // Functions for Low and High buttons
    function setPriceLow() {
      alert('Low price button clicked');
    }

    function setPriceHigh() {
      alert('High price button clicked');
    }
  </script>

</body>
</html>