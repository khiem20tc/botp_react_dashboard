import Navbar from "components/Common/Navbar";
import Sidebar from "components/Common/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return DashboardView();
}

function DashboardView() {
  return (
    <>
      <div>Dashboard view</div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Dashboard;
