const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/", dashboardController.dashboard);
// Route to user
router.use("/user", require("./user"));
router.use("/dashboard", require("./dashboard"));

module.exports = router;
