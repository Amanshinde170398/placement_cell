const express = require("express");
const passport = require("passport");
const interviewController = require("../controllers/interviewController");
const router = express.Router();

router.post(
  "/create",
  passport.checkAuthentication,
  interviewController.create
);
router.get("/show", passport.checkAuthentication, interviewController.show);

module.exports = router;
