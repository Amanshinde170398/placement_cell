const express = require("express");
const passport = require("passport");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/show", studentController.show);
router.post("/create", passport.checkAuthentication, studentController.create);

module.exports = router;
