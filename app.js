require("module-alias/register");

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require('cors');
// Parse JSON bodies for all requests
app.use(express.json({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
// cors
app.use(cors());
// routes importation
const memberRoutes = require("./routes/memberRoutes");
const userRoutes = require("./routes/userRoutes");

// mongodb connection
const { connectToDB } = require("./config/databases/");

// check the status of the server
app.get("/", (req, res) => res.send("Server is up and running!!!"));

// Routes middleware
app.use("/api/v1/member", memberRoutes);
app.use('/api/v1/user', userRoutes )

// app initialization
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
