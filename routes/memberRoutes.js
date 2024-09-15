const express = require("express");
const Member = require("../controllers/MemberController");
const router = express.Router();

// Member Get Requests
router
  .get("/all-members", Member.getAllMembers)
  .get("/single-member/:id", Member.getSingleMember);

// Member Post Requests
router.post("/create-member", Member.createMember);
// Member Patch Requaests
router
  .patch("/update-single-member/:id", Member.updateSingleMember)
  .patch("/update-all-members", Member.updateAllMembers);
// Member Delete Route
router
  .delete("/delete-single-member/:id", Member.deleteSingleMember)
  .delete("/delete-all-members", Member.deleteAllMembers);

module.exports = router;
