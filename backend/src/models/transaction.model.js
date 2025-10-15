import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    note: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
