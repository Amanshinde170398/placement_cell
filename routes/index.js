const express = require("express");
const passport = require("passport");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/", passport.checkAuthentication, dashboardController.dashboard);
// Route to user
router.use("/user", require("./user"));
router.use("/dashboard", require("./dashboard"));
router.use("/student", require("./student"));
router.use("/interview", require("./interview"));

module.exports = router;
