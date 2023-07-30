const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", passport.checkAuthentication, (req, res) => {
  res.render("home/dashboard");
});

module.exports = router;
