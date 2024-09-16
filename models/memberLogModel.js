const mongoose = require("mongoose");

const memberLogSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    status: { type: String, enum: ["success", "fail"], required: true },
  },
  { timestamps: true }
);

const MemberLog = mongoose.model("MemberLog", memberLogSchema);

module.exports = MemberLog;
