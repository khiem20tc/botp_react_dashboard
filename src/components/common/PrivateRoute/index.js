import { useDispatch } from "react-redux";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserInfoAction } from "actions/user";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  // Verify the session
  const getUserInfoResult = dispatch(() => getUserInfoAction());
  const isSignedIn = getUserInfoResult.success && getUserInfoResult.data.status;
  return isSignedIn ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;
