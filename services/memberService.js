const AppMessages = require("../common/appMessages");
const updateAllMembersQueue = require("../config/queue");
const responseHelper = require("../helpers/responseHelper");
const { addUpdateAllMembersToQueue } = require("../queues/memberQueues");
const memberRepository = require("../repositories/memberRepository");
const HttpStatus = require("../utils/StatusCodes");

const createMember = async (req, res) => {
  const { fullName, dateOfBirth, email, phoneNumber } = req.body;

  const data = {
    fullName,
    dateOfBirth: new Date(dateOfBirth),
    email,
    phoneNumber,
  };

  if (!data.phoneNumber.length === 11 || !data.phoneNumber.length === 14) {
    return responseHelper.newError(
      AppMessages.FAILURE.INVALID_PHONE_NUMBER,
      HttpStatus.FORBIDDEN
    );
  }

  const memberInRecord = await memberRepository.getSingleMember(data);
  

  if (memberInRecord) {
    return responseHelper.newError(
      AppMessages.INFO.MEMBER_EXIST,
      HttpStatus.NOT_FOUND
    );
  }

  await memberRepository.createMember(data); 
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

  }else return responseHelper.newError(AppMessages.INFO.MEMBER_DOES_NOT_EXIST, HttpStatus.NOT_FOUND)
}

module.exports = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateSingleMember,
  updateAllMembers
};
