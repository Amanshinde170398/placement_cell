const express = require("express");
const PORT = 8080;

const app = express();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up & running on port ${PORT}`);
});
