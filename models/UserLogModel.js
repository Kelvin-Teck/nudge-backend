const mongoose = require("mongoose");

const userLogSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    status: { type: String, enum: ["success", "fail"], required: true },
  },
  { timestamps: true }
);

const UserLog = mongoose.model("UserLog", userLogSchema);

module.exports = UserLog;
