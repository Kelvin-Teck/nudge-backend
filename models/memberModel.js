const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: { type: String, required: true, minLength: 11, maxLength: 14 },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const member = mongoose.model("Members", memberSchema);

module.exports = member;
