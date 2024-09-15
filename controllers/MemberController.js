const HttpStatus = require("../utils/StatusCodes");
const responseHelper = require("../helpers/responseHelper");
const AppMessages = require("../common/appMessages");
const memberService = require("../services/memberService");

const getSingleMember = async (req, res) => {
  try {
    const response = await memberService.getSingleMember(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.SINGLE_MEMBER_RETRIEVED_SUCCESS,
          response
        )
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.SINGLE_MEMBER_RETRIEVED_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const getAllMembers = async (req, res) => {
  try {
    const response = await memberService.getAllMembers(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.ALL_MEMBERS_RETRIEVED_SUCCESS,
          response
        )
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.ALL_MEMBERS_RETRIEVED_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const createMember = async (req, res) => {
  try {
    const response = await memberService.createMember(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.MEMBER_CREATE_SUCCESS,
          response
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

const updateSingleMember = async (req, res) => {
  try {
    const response = await memberService.updateSingleMember(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.MEMBER_UPDATE_SUCCESS,
          response
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
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.MEMBER_UPDATE_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const updateAllMembers = async (req, res) => {
  try {
    const response = await memberService.updateAllMembers(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.ALL_MEMBERS_UPDATE_SUCCESS,
          response
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
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.ALL_MEMBERS_UPDATE_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const deleteSingleMember = async (req, res) => {
  try {
    const response = await memberService.deleteSingleMember(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.DELETE_USER_SUCCESS,
          response
        )
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.DELETE_USER_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const deleteAllMembers = async (req, res) => {
  try {
    const response = await memberService.deleteAllMembers(req);

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelper.sendSuccess(
          AppMessages.SUCCESS.DELETE_ALL_USERS_SUCCESS,
          response
        )
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(
          responseHelper.sendError(
            `${AppMessages.FAILURE.DELETE_ALL_USERS_FAIL} --> ${error.message}`,
            error.status
          )
        );
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelper.sendError(
          `${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} --> ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
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
