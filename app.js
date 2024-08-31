require("module-alias/register");

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
// cors

// routes importation
const  birthdayRoutes = require("./routes/birthdayRoutes");

// mongodb connection
const { connectToDB } = require("./databases/");

// check the status of the server
app.get("/", (req, res) => res.send("Server is up and running!!!"));

// Routes middleware
app.use("/api/v1/birthday", birthdayRoutes);

// app initialization
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
