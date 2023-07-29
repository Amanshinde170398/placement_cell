const User = require("../models/user");

// show login page
module.exports.login = (req, res) => {};
// create a session
module.exports.createSession = (req, res) => {};
// Show signup page
module.exports.signup = (req, res) => {
  return res.render("user/signup");
};

// Register the user
module.exports.register = async (req, res) => {
  console.log("body", req.body);
  const { email, password, confirm_password } = { ...req.body };
  if (password != confirm_password) {
    res.redirect("back");
  }

  let user = await User.findOne({ email: email });
  if (user) {
    res.redirect("back");
  }

  user = await User.create(req.body);
  return res.redirect("/user/login");
};
// perfom logout
module.exports.destroySession = (req, res) => {};
