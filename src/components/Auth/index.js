import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  return (
    <>
      <Routes>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default Auth;
