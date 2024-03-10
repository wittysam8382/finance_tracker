const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  transactionType: {
    type: String,
    enum: ["Deposit", "Withdraw", "Transfer"],
    required: true,
  },
  amount:{
    type: Number,
    require: [true, "amount is required"],
  },
  description: { type: String, required: true },
  transactionAmount: {
    type: Number,
    required: true,
  },
  transactionTime: { type: Date, default: Date.now },
}, {timestamps:true});

module.exports = mongoose.model("Transaction", transactionSchema);
