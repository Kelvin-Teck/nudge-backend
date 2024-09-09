const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: { type: String, required: true, unique: true, minLength: 11, maxLength: 14 },
    email: { type: String, required: true, unique: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
