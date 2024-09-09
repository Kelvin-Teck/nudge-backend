const AppMessages = require("../common/appMessages");
const responseHelper = require("../helpers/responseHelper");
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

module.exports = {
  createUser,
  getSingleUser,
  getAllUsers
};
