const mongoose = require("mongoose");
require("dotenv").config();

// const main = async () => {
//   await mongoose.connect(process.env.MONGO_CONNECTION_URL);
// };

// main().catch((err) => console.log(err));

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "error in connecting to DB"));
// db.once("open", () => {
//   console.log(process.env.MONGO_CONNECTION_URL);
//   console.log("connected to DB successfully");
// });

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Database :: Mongodb");
});

module.exports = mongoose;
