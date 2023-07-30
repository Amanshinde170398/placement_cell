const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/register", userController.register);
router.get("/signup", userController.signup);
router.get("/login", userController.login);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/user/login" }),
  userController.createSession
);
router.get("/sign-out", userController.destroySession);

module.exports = router;
