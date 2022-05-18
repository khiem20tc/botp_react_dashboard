import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "actions/user";
import { useEffect, useState } from "react";
import { CircularProgress, Modal } from "@mui/material";
import Auth from "components/Auth";
import { Box } from "@mui/system";

function App() {
  // State
  const session = useSelector((state) => state.user.session);

  // Dispatch
  const dispatch = useDispatch();
  const dispatchGetUserInfo = () => dispatch(getUserInfoAction());

  // Hook
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      setCheckingSession(true);
      await dispatchGetUserInfo();
      setCheckingSession(false);
    };
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      <ModalView children={<div></div>} />
      <AppView session={session} checkingSession={checkingSession} />
    </>
  );
}

function ModalView({ isShowing, children }) {
  return <>{/* <Modal keepMounted children={children} /> */}</>; // TODO
}

function AppView({ session, checkingSession }) {
  return checkingSession ? (
    <Box className="min-h-screen w-full flex items-center justify-center">
      <CircularProgress />
    </Box>
  ) : (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        {session ? (
          <Route path="/*" element={<Dashboard />} />
        ) : (
          <Route path="/*" element={<Navigate to="/auth/signin" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
