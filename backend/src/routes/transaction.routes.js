import express from "express";
import jwt from "jsonwebtoken";
import Transaction from "../models/transaction.model.js";

const router = express.Router();

// Middleware to verify JWT token
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};

// Create a transaction
router.post("/", auth, async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all transactions of logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({
      date: -1,
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
