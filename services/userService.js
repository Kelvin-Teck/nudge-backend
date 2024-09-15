const AppMessages = require("../common/appMessages");
const responseHelper = require("../helpers/responseHelper");
const { addDeleteAllUsersToQueue, addUpdateAllUsersToQueue } = require("../queues/memberQueues");
const UserRepository = require("../repositories/userRepository");
const HttpStatus = require("../utils/StatusCodes");

const createUser = async (req, res) => {
  const { fullName, email, phoneNumber } = req.body;

  const data = {
    fullName,
    email,
    phoneNumber,
  };

  const isExistingUser = await UserRepository.getSingleUser(data);

  if (isExistingUser) {
    return responseHelper.newError(
      AppMessages.INFO.USER_EXIST,
      HttpStatus.FORBIDDEN
    );
  }

  await UserRepository.createUser(data);
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  const userInfo = await UserRepository.getSingleUserById(id);

  return userInfo;
};

const getAllUsers = async (req, res) => {
  const userInfo = await UserRepository.getAllUsers();

  return userInfo;
};

const updateSingleUser = async (req, res) => {
  const { id } = req.params;

  const updateData = req.body;

  const isExistingUser = await UserRepository.getSingleUserById(id);

  if (isExistingUser) {
    await UserRepository.getSingleUserByIdAndUpdate(id, updateData);
  } else {
    return responseHelper.newError(
      AppMessages.INFO.USER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );
  }
};

const updateAllUsers = async (req, res) => {
  const data = req.body;
  const userInfo = await UserRepository.getAllUsers();

  if (userInfo.length > 0) {
    for (const user of userInfo) {
      await addUpdateAllUsersToQueue(user._id, data)
    }
  }
}

const deleteSingleUser = async (req, res) => {
  const { id } = req.params;

  const userInfo = await UserRepository.getSingleUserById(id);

  if (!userInfo) {
    return responseHelper.newError(
      AppMessages.INFO.USER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );
  }

  await UserRepository.deleteSingleUserById(id);
};


const deleteAllUser = async (req, res) => {
  const userInfo = await UserRepository.getAllUsers();

  if (!userInfo) {
    return responseHelper.newError(
      AppMessages.INFO.USER_DOES_NOT_EXIST,
      HttpStatus.NOT_FOUND
    );
  }

  for (const user of userInfo) {
    await addDeleteAllUsersToQueue(user._id)
  }
};

module.exports = {
  createUser,
  getSingleUser,
  getAllUsers,
  updateSingleUser,
  updateAllUsers,
  deleteSingleUser,
  deleteAllUser
};
