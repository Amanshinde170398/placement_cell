const express = require("express");
const passport = require("passport");
const dashboardController = require("../controllers/dashboardController");
const router = express.Router();

router.get("/", passport.checkAuthentication, dashboardController.dashboard);

module.exports = router;
