const Interview = require("../models/interview");
const Student = require("../models/student");

// Create a company for interview
module.exports.create = async (req, res) => {
  try {
    const { company_name } = { ...req.body };
    let interview = await Interview.findOne({ company_name: company_name });
    if (interview) {
      console.log("compnay Already exist");
      res
        .status(400)
        .json({ successfull: false, message: "company already exist" });
    }
    interview = await Interview.create(req.body);
    return res.json({
      successfull: true,
      data: {
        interview: interview,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ successfull: false, message: "Fill all fields" });
  }
};

module.exports.show = async (req, res) => {
  try {
    const interviews = await Interview.find({});
    res.json({ successfull: true, data: { interviews: interviews } });
  } catch (err) {
    res.redirect("back");
  }
};

module.exports.scheduleStudentInterview = async (req, res) => {
  try {
    const { email, company_name, result } = { ...req.body };
    let student = await Student.findOne({ email: email });
    if (!student) {
      return res.redirect("back");
    }
    let interview = await Interview.findOne({ company_name: company_name });
    let studentExists = student.interview.filter(
      (inter) => inter.company == company_name
    );
    if (studentExists.length > 0) {
      return res.redirect("back");
    }
    interview.interviews.push({ student: student.name, result: result });
    interview = await interview.save();
    console.log(interview);
    student.interview.push({
      company: company_name,
      result: result,
      date: interview.date,
    });
    student = await student.save();
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
