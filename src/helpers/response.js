const sendSuccessResponse = (res, statusCode, message, data = null) => {
  const response = {
    status: "success",
    message: message,
  };
  if (data) response.data = data;
  res.status(statusCode).json(response);
};

const sendErrorResponse = (res, statusCode, message, error = null) => {
  const response = {
    status: "error",
    message: message,
  };
  if (error) response.error = error;
  res.status(statusCode).json(response);
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
