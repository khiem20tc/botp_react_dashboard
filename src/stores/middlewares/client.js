import CustomError from "constants/error";

// Executes async query to the backend
const clientMiddleware = (store) => (next) => async (action) => {
  // Skip none-async action
  if (!action.pendingAction) {
    return next(action);
  }

  // Destructure the action
  const { type, pendingAction: promise } = action;
  // Execute async dispatch
  let nextAction, returnValue;
  try {
    const data = await promise();
    nextAction = { type: `${type}_SUCCESS`, data };
    returnValue = { success: true, data };
  } catch (error) {
    // Skip toast message
    // - Note: Based on the server response, there's no need to examine
    //         the http status code but javascript error message
    const isNetworkError = String(error.message ?? "").includes(
      CustomError.NETWORK_ERROR
    );
    nextAction = {
      type: `${type}_FAILED`,
      error,
      isNetworkError,
    };
    returnValue = { success: false, error, isNetworkError };
  }

  // Run next action
  next(nextAction);

  // Return async result
  return returnValue;
};

export default clientMiddleware;
