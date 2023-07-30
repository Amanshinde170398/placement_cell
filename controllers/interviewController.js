const Interview = require("../models/interview");

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
