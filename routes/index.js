const express = require("express");
const router = express.Router();

// Route to user
router.use("/user", require("./user"));

module.exports = router;
