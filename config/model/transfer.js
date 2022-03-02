const mongoose = require("mongoose");
const transferSchema = new mongoose.Schema(
  {
    accountNumber: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
    destinationAccountNumber:{ type: Number, default: 0 }
  })    

  module.exports = mongoose.model("transfer", transferSchema);