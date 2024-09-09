const HttpStatus = require("../utils/StatusCodes");
const responseHelper = require("../helpers/responseHelper");
const AppMessages = require("../common/appMessages");
const UserService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const response = await UserService.createUser(req);

    return res
      .status(HttpStatus.CREATED)
      .json(
        responseHelper.sendSuccess(
          response,
          AppMessages.SUCCESS.USER_CREATE_SUCCESS
        )
      );
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(HttpStatus.CONFLICT)
        .json(
          responseHelper.sendError(
            AppMessages.INFO.EMAIL_EXISTS,
            HttpStatus.CONFLICT
          )
        );
    }

    if (error.name === "ValidationError") {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json(
          responseHelper.sendError(
            AppMessages.FAILURE.INVALID_PHONE_NUMBER,
            HttpStatus.FORBIDDEN
          )
        );
    }

    if (error.status) {
      return res
        .status(error.status)
        .json(responseHelper.sendError(error.message, error.status));
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} - ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const getSingleUser = async (req, res) => {
  try {
    const response = await UserService.getSingleUser(req);

    return res
      .status(HttpStatus.CREATED)
      .json(
        responseHelper.sendSuccess(AppMessages.SUCCESS.DATA_FETCHED, response)
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(responseHelper.sendError(error.message, error.status));
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} - ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await UserService.getAllUsers(req);

    return res
      .status(HttpStatus.CREATED)
      .json(
        responseHelper.sendSuccess(AppMessages.SUCCESS.DATA_FETCHED, response)
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(responseHelper.sendError(error.message, error.status));
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} - ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

module.exports = { createUser, getSingleUser, getAllUsers };
