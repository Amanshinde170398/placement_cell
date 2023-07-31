const express = require("express");
const passport = require("passport");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/show", passport.checkAuthentication, studentController.show);
router.post("/create", passport.checkAuthentication, studentController.create);
router.get(
  "/download_csv",
  passport.checkAuthentication,
  studentController.download_csv
);

module.exports = router;
