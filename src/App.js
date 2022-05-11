import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "components/Auth/SignIn";
import SignUp from "components/Auth/SignUp";
import Dashboard from "components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "actions/user";
import { useEffect } from "react";

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
      <ModalView />
      <AppView isLoggedIn={isLoggedIn} />
    </>
  );
}

function ModalView({ isShowing, node }) {
  return <></>; // TODO
}

function AppView({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        isLoggedIn ?
        <Route path="/*" element={<Dashboard />} /> : <></>
      </Routes>
    </Router>
  );
}

export default App;
