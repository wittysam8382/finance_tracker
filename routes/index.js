const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Transaction = require("../models/Transaction");

// Welcome page
router.get("/", (req, res) => {
  res.render("welcome");
});

// Dashboard
router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.render("dashboard", {
      name: req.user.name,
      transactions: transactions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Add transaction
 router.post("/user._id/transaction")
