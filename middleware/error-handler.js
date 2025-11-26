const { CustomAPIError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  // Custom API Error
  if (err instanceof CustomAPIError) {
    return res.status(customError.statusCode).json({ msg: customError.msg });
  }

  // Duplicate key error (MongoDB / Mongoose)
  if (err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;

    return res.status(customError.statusCode).json({ msg: customError.msg });
  }

  // Default fallback
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
