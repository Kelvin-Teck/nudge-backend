
const db = {};

db.Member = require("./memberModel");
db.User = require('./userModel');
db.MemberLog = require('./memberLogModel');
db.UserLog = require("./UserLogModel");



module.exports = {db}