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
    contact_number: {
      type: Number,
      unique: true,
      min: [10, "Must be 10, got {VALUE}"],
      max: [10, "Must be 10, got {VALUE}"],
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
      enum: ["Placed", "Not Placed"],
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
          type: mongoose.Schema.Types.ObjectId,
          ref: "Company",
        },
        date: {
          type: String,
        },
        result: {
          type: String,
          enum: ["Pass", "Fail", "On Hold", "Not Attempted"],
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
