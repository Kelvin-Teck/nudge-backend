const express = require('express');
const member = require('../controllers/MemberController');
const  router = express.Router();

// Birthday Get Requests
router.get('/all-members', member.getAllMembers)
    .get("/single-member/:id", member.getSingleMember);

// Birthday Post Requests
router.post('/create-member', member.createMember)
// Birthday Patch Requests
router.patch('/update-single-member/:id', member.updateSingleMember)
    .patch('/update-all-members', member.updateAllMembers)

module.exports = router;