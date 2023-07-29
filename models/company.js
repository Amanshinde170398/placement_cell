const mongoose = require("mongoose");
const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    date: {
      type: Date,
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
          enum: [["Pass", "Fail", "On Hold", "Not Attempted"]],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
