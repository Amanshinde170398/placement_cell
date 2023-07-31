const Student = require("../models/student");
const Interview = require("../models/interview");
const dashboardHelper = require("../helpers/dashboardHelper");

module.exports.dashboard = async (req, res) => {
  console.log("ok");
  let students = await Student.find({});
  let interviews = await Interview.find({});
  res.render("home/dashboard", { students: students, interviews: interviews });
};
