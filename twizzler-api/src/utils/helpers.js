exports.successResponse = (message, data) => ({
  statusCode: 200,
  message,
  data,
});

exports.errorResponse = (message, error, statusCode) => ({
  statusCode: statusCode || 400,
  message,
  error,
});
