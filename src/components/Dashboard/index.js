import Navbar from "components/Common/Navbar";
import Sidebar from "components/Common/Sidebar";
import { Route, Routes } from "react-router-dom";
import Analyser from "./Analyser";
import Identity from "./Identity";
import Provenance from "./Provenance";
import Reminder from "./Reminder";

function Dashboard() {
  return DashboardView();
}

function DashboardView() {
  return (
    <Routes>
      <div>Dashboard view</div>
      <Navbar />
      <Sidebar />
      <Route path="analyzer" element={<Analyser />}></Route>
      <Route path="identity" element={<Identity />}></Route>
      <Route path="provenance" element={<Provenance />}></Route>
      <Route path="reminder" element={<Reminder />}></Route>
    </Routes>
  );
}

export default Dashboard;
