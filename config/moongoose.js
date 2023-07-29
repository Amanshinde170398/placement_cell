const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/placement_cell");
};

main().catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connecting to DB"));
db.once("open", () => {
  console.log("connected to DB successfully");
});

module.exports = mongoose;
