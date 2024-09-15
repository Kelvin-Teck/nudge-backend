  
const { db } = require("../models");

const getSingleUser = async (data) => {
  const userInfo = await db.User.findOne(data).sort({ createdAt: -1 });

  return userInfo;
};
const getAllUsers = async () => {
  const userInfo = await db.User.find({}).sort({ createdAt: -1 });

  return userInfo;
};

const createUser = async (data) => {
  await db.User.create(data);
};

const getSingleUserById = async (id) => {
  const userInfo = await db.User.findById(id).sort({ createdAt: -1 });

  return userInfo;
};

const getSingleUserByIdAndUpdate = async (id, updateData) => {
  await db.User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteSingleUserById = async (id) => {
  await db.User.deleteOne({ _id: id });
}

module.exports = {
  getSingleUser,
  createUser,
  getSingleUserById,
  getAllUsers,
  getSingleUserByIdAndUpdate,
  deleteSingleUserById
};
