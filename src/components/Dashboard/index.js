import { CssBaseline, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "components/Common/Navbar";
import Sidebar from "components/Common/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Analyser from "./Analyser";
import Identity from "./Identity";
import Provenance from "./Provenance";
import Manual from "./Manual";

const drawerWidth = 240;

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      {/* "Main content" */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100%",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="" element={<Analyser />}></Route>
          <Route path="analyzer" element={<Analyser />}></Route>
          <Route path="identity" element={<Identity />}></Route>
          <Route path="provenance" element={<Provenance />}></Route>
          <Route path="manual" element={<Manual />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
