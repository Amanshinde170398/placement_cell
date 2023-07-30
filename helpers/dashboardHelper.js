const express = require("express");
const app = express();

app.locals.capitalized = (str = "") => {
  if (str) {
    let str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};
