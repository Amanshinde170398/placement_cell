const Student = require("../models/student");

// Add student to DB
module.exports.create = async (req, res) => {
  const { email } = { ...req.body };
  let student = await Student.findOne({ email: email });
  if (student) {
    console.log("student already present!");
    return res.redirect("back");
  }
  student = await Student.create(req.body);
  return res.json({ successful: true });
};

// Get al students
module.exports.show = async (req, res) => {
  const students = await Student.find({});
  return res.json({
    successful: true,
    data: {
      students: students,
    },
  });
};
