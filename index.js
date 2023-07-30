const express = require("express");
const db = require("./config/moongoose");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passportLocalStrategy");
const MongoStore = require("connect-mongo");
const PORT = 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded());
console.log("index", 21);
app.use(
  session({
    name: "placement_cell",
    // TODO change secret before production
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost:27017/placement_cell",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use("/", require("./routes"));
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up & running on port ${PORT}`);
});
