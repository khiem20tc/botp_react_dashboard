import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "components/Auth/SignIn";
import SignUp from "components/Auth/SignUp";
import Dashboard from "components/Dashboard";
import Identity from "components/Dashboard/Identity";
import Reminder from "components/Dashboard/Reminder";
import Analyser from "components/Dashboard/Analyser";
import Provenance from "components/Dashboard/Provenance";
import PrivateRoute from "components/Common/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="*" element={<Dashboard />}>
            <Route path="analyzer" element={<Analyser />}></Route>
            <Route path="identity" element={<Identity />}></Route>
            <Route path="provenance" element={<Provenance />}></Route>
            <Route path="reminder" element={<Reminder />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
