const { db } = require("../models");

const getSingleUser = async (data) => {
  const userInfo = await db.User.findOne(data);

  return userInfo;
};

const createUser = async (data) => {
  await db.User.create(data);
};

module.exports = { getSingleUser, createUser };
