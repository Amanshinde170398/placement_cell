const express = require("express");
const passport = require("passport");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/", passport.checkAuthentication, dashboardController.dashboard);
// Route to user
router.use("/user", require("./user"));
router.use("/dashboard", require("./dashboard"));

module.exports = router;
