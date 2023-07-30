const mongoose = require("mongoose");
const interviewSchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    date: {
      type: String,
      require: true,
    },
    interviews: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        result: {
          type: String,
          enum: ["pass", "fail", "on hold", "not attempted"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
