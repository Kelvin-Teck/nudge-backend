const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// User GET Route
router
  .get("/get-single-user/:id", UserController.getSingleUser)
  .get("/get-all-users", UserController.getAllUsers);

// User POST Routes
router.post("/create-user", UserController.createUser);
// User PATCH Routes
router
  .patch("/update-single-user/:id", UserController.updateSingleUser)
  .patch("/update-all-users", UserController.updateAllUsers);

// User Delete Routes
router
  .delete("/delete-single-user/:id", UserController.deleteSingleUser)
  .delete("/delete-all-users", UserController.deleteAllUsers);

module.exports = router;
