import { Box, Typography } from "@mui/material";
import { botpLogoImg } from "assets/images";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  // Hook
  const [activePage, setActivePage] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "identity":
        setActivePage(1);
        break;
      case "provenance":
        setActivePage(2);
        break;
      case "reminder":
        setActivePage(3);
        break;
      case "analyzer":
      default:
        setActivePage(0);
    }
  }, [location]);

  return SidebarView({ activePage });
}

function SidebarView({ activePage }) {
  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <img src={botpLogoImg} alt="botp logo" width="28" height="28" />
      <Typography
        variant="body2"
        component="div"
        sx={{ ml: 1.5, color: "#034266", fontWeight: "bold" }}
      >
        BOTP Dashboard
      </Typography>
    </Box>
  );
}

export default Sidebar;
