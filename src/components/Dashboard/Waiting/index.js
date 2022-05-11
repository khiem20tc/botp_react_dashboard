import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserInfoAction } from "actions/user";

function PrivateRoute() {
  return <PrivateRouteView isSignedIn={isSignedIn} />;
}

function PrivateRouteView({ isSignedIn }) {
  return isSignedIn === true ? <Outlet /> : <Navigate to="/auth/signin" />;
}

export default PrivateRoute;
