const mongoose = require("mongoose");
// console.log(new mongoose.Types.ObjectId("66de326e489eb8d0564158ea"));


const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URI_PRODUCTION);
    console.log("Database connection established successfully!!!");
  } catch (error) {
    console.log(
      `There was an error trying to connect to DB!!! ${error.message}`
    );
  }
};

module.exports = { connectToDB };
