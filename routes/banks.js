const express = require("express");
const Bank = require("../models/Bank");
const router = express.Router();

// Get All Banks
router.get("/", async (req, res) => {
    try {
        const banks = await Bank.find();
        res.json(banks);
    } catch (error) {
        res.status(500).json({ message: "Server Error :" + error });
    }
});

// Create a New User
router.post("/", async (req, res) => {
    try {
        const { bankName, minimumScore, percentage, address } = req.body;
        const newBank = new Bank({ bankName, minimumScore, percentage, address });
        await newBank.save();
        res.status(201).json(newBank);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Delete a User by ID
router.delete("/:id", async (req, res) => {
    try {
        await Bank.findByIdAndDelete(req.params.id);
        res.json({ message: "Bank Deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
