const { required } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique:true, minLength: 11, maxLength: 14 },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
