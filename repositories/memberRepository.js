const { db } = require("../models");

const createMember = async (data) => {
  await db.Member.create(data);
};

const getAllMembers = async () => {
  const allMembers = await db.Member.find({})
    .populate("user")
    .sort({ createdAt: -1 });

  return allMembers;
};

const getSingleMemberById = async (id) => {
  const memberInfo = await db.Member.findById(id)
    .populate("user")
    .sort({ createdAt: -1 });

  return memberInfo;
};

const getSingleMemberByIdAndUpdate = async (id, updateData) => {
  await db.Member.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const getSingleMember = async (data) => {
  const memberInfo = await db.Member.findOne(data);

  return memberInfo;
};

module.exports = {
  createMember,
  getAllMembers,
  getSingleMember,
  getSingleMemberById,
  getSingleMemberByIdAndUpdate,
};
