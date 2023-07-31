const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://1703amanshinde98:eteTKBvDSdMdVcbD@aman.evnkzhp.mongodb.net/"
  );
};

main().catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connecting to DB"));
db.once("open", () => {
  console.log("connected to DB successfully");
});

module.exports = mongoose;
