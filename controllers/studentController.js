const Student = require("../models/student");
const fs = require("fs");
const path = require("path");

// Add student to DB
module.exports.create = async (req, res) => {
  try {
    const { email } = { ...req.body };
    let student = await Student.findOne({ email: email });
    if (student) {
      console.log("student already present!");
      return res.redirect("back");
    }
    student = await Student.create(req.body);
    return res.redirect("/dashboard");
  } catch (err) {
    return res.redirect("back");
  }
};

// Get all students
module.exports.show = async (req, res) => {
  const students = await Student.find({});
  return res.json({
    successful: true,
    data: {
      students: students,
    },
  });
};

// Download the CSV report
module.exports.download_csv = async (req, res) => {
  try {
    const allStudents = await Student.find({});
    let report =
      "student Id, Student name, Student email, Student college, Student status, DSA Final Score, WebD Final Score, React Final Score, Interview date, Interview company, Interview result";
    let studentData1 = "";

    for (let student of allStudents) {
      studentData1 =
        student._id +
        "," +
        student.name +
        "," +
        student.email +
        "," +
        student.college +
        "," +
        student.placement +
        "," +
        student.dsa +
        "," +
        student.webd +
        "," +
        student.react;
      if (student.interview.length > 0) {
        for (let interview of student.interview) {
          let studentData2 = "";
          studentData2 +=
            "," +
            interview.date.toString() +
            "," +
            interview.company +
            "," +
            interview.result;
          report += "\n" + studentData1 + studentData2;
        }
      }
    }

    const csvFile = fs.writeFile(
      "uploads/studentsReport.csv",
      report,
      function (err, data) {
        if (err) {
          console.log(err);
          return res.redirect("back");
        }
        return res.download("uploads/studentsReport.csv");
      }
    );
  } catch (err) {
    console.log(err);
  }
};
