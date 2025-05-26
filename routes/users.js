const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "User list endpoint" });
});

router.get("/:id", (req, res) => {
    res.json({ message: `User ID: ${req.params.id}` });
});

module.exports = router;
