const mongoose = require("mongoose");

const birthdayCelebrantSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true }
  },
  { timestamps: true }
);

const birthdayCelebrant = mongoose.model(
  "BirthdayCelebrant",
  birthdayCelebrantSchema
);

module.exports = birthdayCelebrant;
