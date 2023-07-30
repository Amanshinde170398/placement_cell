const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      let user = await User.findOne({ email: email });
      if (!user || user.password != password) {
        console.log("Invalid Username/Password");
        return done(null, false);
      }
      return done(null, user);
    }
  )
);

// serializing the user to decide which key to be kept in cookies
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserializing they user from key in the cookies
passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id);
  if (!user) {
    console.log("Error in finding the user");
  }
  return done(null, user);
});

// check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/user/login");
};

// set user in views
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
module.exports = passport;
