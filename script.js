// ===============================
// P2P WEBSITE - script.js
// Demo version only
// ===============================


// ---------- P2P OFFERS ----------

const buyOffers = [
  {
    user: "Trader01",
    price: 160,
    available: 500,
    payment: "Bank Transfer"
  },
  {
    user: "CryptoUser",
    price: 161,
    available: 1000,
    payment: "Telebirr"
  },
  {
    user: "EthioTrader",
    price: 162,
    available: 300,
    payment: "Mobile Money"
  }
];

const sellOffers = [
  {
    user: "Seller01",
    price: 159,
    available: 400,
    payment: "Bank Transfer"
  },
  {
    user: "Seller02",
    price: 158,
    available: 800,
    payment: "Telebirr"
  }
];


// ---------- SHOW OFFERS ----------

function displayOffers(offers) {

  const container = document.getElementById("offers");

  if (!container) return;

  const paymentElement =
    document.getElementById("payment");

  const payment =
    paymentElement ? paymentElement.value : "All Payment Methods";

  container.innerHTML = "";

  const filteredOffers = offers.filter(function(offer) {

    return (
      payment === "All Payment Methods" ||
      offer.payment === payment
    );

  });


  if (filteredOffers.length === 0) {

    container.innerHTML =
      "<p>No offers found.</p>";

    return;
  }


  filteredOffers.forEach(function(offer) {

    const card =
      document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <h3>👤 ${offer.user}</h3>

      <p>Price:
        <strong>
          ${offer.price} ETB / USDT
        </strong>
      </p>

      <p>Available:
        ${offer.available} USDT
      </p>

      <p>Payment:
        ${offer.payment}
      </p>

      <button
        onclick="startTrade('${offer.user}', ${offer.price})">
        Trade
      </button>

    `;

    container.appendChild(card);

  });

}


// ---------- BUY ----------

function showBuy() {

  const buyTab =
    document.getElementById("buyTab");

  const sellTab =
    document.getElementById("sellTab");

  if (buyTab) {
    buyTab.classList.add("active");
  }

  if (sellTab) {
    sellTab.classList.remove("active");
  }

  displayOffers(buyOffers);
}


// ---------- SELL ----------

function showSell() {

  const buyTab =
    document.getElementById("buyTab");

  const sellTab =
    document.getElementById("sellTab");

  if (buyTab) {
    buyTab.classList.remove("active");
  }

  if (sellTab) {
    sellTab.classList.add("active");
  }

  displayOffers(sellOffers);
}


// ---------- START TRADE ----------

function startTrade(user, price) {

  alert(
    "Demo Trade\n\n" +
    "Trader: " + user + "\n" +
    "Price: " + price + " ETB / USDT"
  );

}


// ---------- TRADE CALCULATOR ----------

function calculateTrade() {

  const amountElement =
    document.getElementById("usdt");

  const totalElement =
    document.getElementById("total");

  if (!amountElement || !totalElement) {
    return;
  }

  const amount =
    Number(amountElement.value);

  const price = 160;

  if (amount <= 0) {

    totalElement.innerText =
      "0 ETB";

    return;
  }

  const total =
    amount * price;

  totalElement.innerText =
    total.toLocaleString() + " ETB";

}


// ---------- CREATE ORDER ----------

function createOrder() {

  const amountElement =
    document.getElementById("usdt");

  const messageElement =
    document.getElementById("message");

  if (!amountElement || !messageElement) {
    return;
  }

  const amount =
    Number(amountElement.value);

  const available = 500;
  const price = 160;

  if (!amount || amount <= 0) {

    messageElement.innerText =
      "Enter a valid USDT amount.";

    return;
  }

  if (amount > available) {

    messageElement.innerText =
      "Not enough USDT available.";

    return;
  }

  const total =
    amount * price;

  messageElement.innerText =
    "Demo order created: " +
    amount +
    " USDT = " +
    total.toLocaleString() +
    " ETB";

}


// ---------- CANCEL TRADE ----------

function cancelTrade() {

  const amountElement =
    document.getElementById("usdt");

  const totalElement =
    document.getElementById("total");

  const messageElement =
    document.getElementById("message");

  if (amountElement) {
    amountElement.value = "";
  }

  if (totalElement) {
    totalElement.innerText = "0 ETB";
  }

  if (messageElement) {

    messageElement.innerText =
      "Trade cancelled.";

  }

}


// ---------- LOGIN DEMO ----------

function login(event) {

  if (event) {
    event.preventDefault();
  }

  const username =
    document.getElementById("email");

  const password =
    document.getElementById("password");

  const message =
    document.getElementById("message");

  if (!username || !password) {
    return;
  }

  if (!username.value || !password.value) {

    if (message) {
      message.innerText =
        "Enter your login information.";
    }

    return;
  }

  if (message) {

    message.innerText =
      "Demo login successful.";

  }

}


// ---------- REGISTER DEMO ----------

function registerUser(event) {

  if (event) {
    event.preventDefault();
  }

  const password =
    document.getElementById("password");

  const confirmPassword =
    document.getElementById("confirmPassword");

  const message =
    document.getElementById("message");

  if (!password || !confirmPassword) {
    return;
  }

  if (
    password.value !==
    confirmPassword.value
  ) {

    if (message) {

      message.innerText =
        "Passwords do not match.";

    }

    return;
  }

  if (message) {

    message.innerText =
      "Demo account created successfully.";

  }

}


// ---------- WALLET ----------

function deposit() {

  const message =
    document.getElementById("message");

  if (message) {

    message.innerText =
      "Demo deposit page.";

  }

}


function withdraw() {

  const message =
    document.getElementById("message");

  if (message) {

    message.innerText =
      "Demo withdrawal page.";

  }

}


// ---------- PAYMENT FILTER ----------

const paymentFilter =
  document.getElementById("payment");

if (paymentFilter) {

  paymentFilter.addEventListener(
    "change",
    function() {

      const buyTab =
        document.getElementById("buyTab");

      if (
        buyTab &&
        buyTab.classList.contains("active")
      ) {

        displayOffers(buyOffers);

      } else {

        displayOffers(sellOffers);

      }

    }
  );

}


// ---------- PAGE START ----------

if (
  document.getElementById("offers")
) {

  displayOffers(buyOffers);

}
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
      document.getElementById("username").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    const message =
      document.getElementById("message");


    if (username.length < 3) {
      message.innerText =
        "Username must be at least 3 characters.";
      return;
    }


    if (password.length < 8) {
      message.innerText =
        "Password must be at least 8 characters.";
      return;
    }


    if (password !== confirmPassword) {
      message.innerText =
        "Passwords do not match.";
      return;
    }


    message.innerText =
      "Registration form is valid!";
  });
  const express = require("express");

const app = express();
const PORT = 3000;

// Allow JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "P2P Exchange backend is running!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`P2P Exchange server running on port ${PORT}`);
});
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./p2p_exchange.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to P2P Exchange database.");
  }
});

module.exports = db;