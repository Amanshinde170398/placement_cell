const express = require("express");
const db = require("./config/moongoose");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const PORT = 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up & running on port ${PORT}`);
});
