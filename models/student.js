const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone_number: {
      type: Number,
      unique: true,
    },
    batch: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
      lowercase: true,
    },
    placement: {
      type: String,
      required: true,
      enum: ["placed", "not placed"],
    },
    dsa: {
      type: Number,
      required: true,
    },
    webd: {
      type: Number,
      required: true,
    },
    react: {
      type: Number,
      required: true,
    },
    interview: [
      {
        company: {
          type: String,
        },
        date: {
          type: String,
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

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
