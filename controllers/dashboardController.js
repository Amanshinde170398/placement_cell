const Student = require("../models/student");
const Interview = require("../models/interview");

// fetch list of students and interview and dislay them on homepage
module.exports.dashboard = async (req, res) => {
  let students = await Student.find({});
  let interviews = await Interview.find({});
  res.render("home/dashboard", { students: students, interviews: interviews });
};
