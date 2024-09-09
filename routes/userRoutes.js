const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Users GET Route
router
  .get("/get-single-user/:id", UserController.getSingleUser)
  .get("/get-all-users", UserController.getAllUsers);

// Users POST Routes
router.post("/create-user", UserController.createUser);

module.exports = router;
