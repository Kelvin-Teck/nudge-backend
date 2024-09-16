const AppMessages = require("../common/appMessages");
const updateAllMembersQueue = require("../config/queue");
const responseHelper = require("../helpers/responseHelper");
const {
  addUpdateAllMembersToQueue,
  addDeleteAllMembersToQueue,
} = require("../queues/memberQueues");
const memberRepository = require("../repositories/memberRepository");
const HttpStatus = require("../utils/StatusCodes");

const createMember = async (req, res) => {
  const { userId } = req.query;

  const { fullName, dateOfBirth, email, phoneNumber } = req.body;

  const data = {
    fullName,
    dateOfBirth: new Date(dateOfBirth),
    email,
    phoneNumber,
    user: userId,
  };

  if (!data.phoneNumber.length === 11 || !data.phoneNumber.length === 14) {
    return responseHelper.newError(
      AppMessages.FAILURE.INVALID_PHONE_NUMBER,
      HttpStatus.FORBIDDEN
    );
  }

  const memberInRecord = await memberRepository.getSingleMember(data);

  if (memberInRecord) {
    await memberRepository.writeToMemberLog(
      "fail",
      AppMessages.INFO.MEMBER_EXIST
    );

    return responseHelper.newError(
      AppMessages.INFO.MEMBER_EXIST,
      HttpStatus.NOT_FOUND
    );
  }

  await memberRepository.createMember(data);
  await memberRepository.writeToMemberLog(
    "success",
    AppMessages.SUCCESS.MEMBER_CREATE_SUCCESS
  );
};

const getAllMembers = async (req, res) => {
  const allMembers = await memberRepository.getAllMembers();

  return allMembers;
};

const getSingleMember = async (req, res) => {
  const { id } = req.params;

  const member = await memberRepository.getSingleMemberById(id);

  if (!member)
    return responseHelper.newError(
      AppMessages.INFO.MEMBER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );

  return member;
};

const updateSingleMember = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const isExistingMember = await memberRepository.getSingleMemberById(id);

  if (isExistingMember) {
    await memberRepository.getSingleMemberByIdAndUpdate(id, updateData);
  } else {
    return responseHelper.newError(
      AppMessages.INFO.MEMBER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );
  }
};

const updateAllMembers = async (req, res) => {
  const updateData = req.body;

  const allMembers = await memberRepository.getAllMembers();

  if (allMembers.length > 0) {
    for (const member of allMembers) {
      // await memberRepository.getSingleMemberByIdAndUpdate(member.id, updateData);

      await addUpdateAllMembersToQueue(member.id, updateData);
    }
  } else
    return responseHelper.newError(
      AppMessages.INFO.MEMBER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );
};

const deleteSingleMember = async (req) => {
  const { id } = req.params;

  const memberInfo = await memberRepository.getSingleMemberById(id);

  if (!memberInfo) {
    return responseHelper.newError(AppMessages.INFO.MEMBER_DOES_NOT_EXIST);
  }

  await memberRepository.deleteSingleMember(id);
};

const deleteAllMembers = async (req, res) => {
  const allMembers = await memberRepository.getAllMembers();

  if (allMembers.length > 0) {
    for (const member of allMembers) {
      await addDeleteAllMembersToQueue(member._id);
    }
  }
};

module.exports = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateSingleMember,
  updateAllMembers,
  deleteSingleMember,
  deleteAllMembers,
};
