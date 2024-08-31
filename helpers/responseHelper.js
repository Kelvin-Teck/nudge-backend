import HttpStatus from "../utils/StatusCodes";

export const sendError = (message, code) => {
  var error = {
    status: "ERROR",
    code: code,
    message: message,
  };

  return error;
};

export const sendSuccess = (message, data = undefined) => {
  var success = {
    status: "SUCCESS",
    code: HttpStatus.OK,
    message: message,
    data: data,
  };

  return success;
};

export const newError = (message, code) => {
  const error = new Error(message);
  error.status = code;
  throw error;
};
