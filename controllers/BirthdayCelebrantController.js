const  HttpStatus = require("../utils/StatusCodes");
const responseHelpers = require("../helpers/responseHelper");
const AppMessages = require("../common/appMessages");
const birthdayCelebrantService = require("../services/birthdayCelebrantService");



const createBirthdayCelebrant = async (req, res) => {
  try {
    const response = await birthdayCelebrantService.createBirthdayCelebrant(
      req
    );

    return res
      .status(HttpStatus.OK)
      .json(
        responseHelpers.sendSuccess(
          AppMessages.SUCCESS.BIRTHDAY_CELEBRANT_CREATED,
          response
        )
      );
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json(responseHelpers.sendError(error.message, error.status));
    }

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        responseHelpers.sendError(`${AppMessages.FAILURE.INTERNAL_SERVER_ERROR} - ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
      );
  }
};



module.exports = {
  createBirthdayCelebrant,
};
