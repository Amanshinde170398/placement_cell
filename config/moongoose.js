const mongoose = require("mongoose");
require("dotenv").config();

const main = async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_URL);
};

main().catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connecting to DB"));
db.once("open", () => {
  console.log("connected to DB successfully");
});

module.exports = mongoose;
