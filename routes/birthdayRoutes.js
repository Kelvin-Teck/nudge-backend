const express = require('express');
const BirthdayCelebrant = require('../controllers/BirthdayCelebrantController');
const  router = express.Router();

router.post('/create', BirthdayCelebrant.createBirthdayCelebrant)

module.exports = router;