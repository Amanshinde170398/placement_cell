const dashboardHelper = require("../helpers/dashboardHelper");

module.exports.dashboard = (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/user/login");
  res.render("home/dashboard");
};
