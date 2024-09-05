const { db } = require("../models");

const createMember = async (data) => {
  await db.member.create(data);
};

const getAllMembers = async () => {
  const allMembers = await db.member.find({});

  return allMembers;
};

const getSingleMemberById = async (id) => {
  const memberInfo = await db.member.findById(id);

  return memberInfo;
};

const getSingleMemberByIdAndUpdate = async (id, updateData) => {
  await db.member.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const getSingleMember = async (data) => {
  const memberInfo = await db.member.findOne(data);

  return memberInfo;
};

module.exports = {
  createMember,
  getAllMembers,
  getSingleMember,
  getSingleMemberById,
  getSingleMemberByIdAndUpdate,
};
