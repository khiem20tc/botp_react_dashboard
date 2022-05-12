import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignIn from "components/Auth/SignIn";
import SignUp from "components/Auth/SignUp";
import Dashboard from "components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "actions/user";
import { useEffect } from "react";
import { Modal } from "@mui/material";
import SetupKYC from "components/Auth/SetupKYC";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatchGetUserInfo = () => dispatch(getUserInfoAction());

  useEffect(() => {
    const getUserInfo = async () => {
      await dispatchGetUserInfo();
    };
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ModalView children={<div>Nooo</div>} />
      <AppView isLoggedIn={isLoggedIn} />
    </>
  );
}

function ModalView({ isShowing, children }) {
  return <>{/* <Modal keepMounted children={children} /> */}</>; // TODO
}

function AppView({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/kyc" element={<SetupKYC />} />
        {isLoggedIn ? (
          <Route path="/*" element={<Dashboard />} />
        ) : (
          <Route path="/*" element={<Navigate to="/auth/signin" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
