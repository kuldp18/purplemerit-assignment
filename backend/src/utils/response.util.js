export const sendError = (res, statusCode, message, details = null) => {
  const response = {
    success: false,
    message,
  };

  // Only include details in development mode for security
  if (details && process.env.NODE_ENV === "development") {
    response.details = details;
  }

  return res.status(statusCode).json(response);
};

export const sendSuccess = (res, statusCode, message, data = null) => {
  const response = {
    success: true,
    message,
  };

  if (data) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};
