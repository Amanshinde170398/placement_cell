const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/show", studentController.show);
router.post("/create", studentController.create);

module.exports = router;
