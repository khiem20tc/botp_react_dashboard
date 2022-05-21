import {
  Analytics,
  AnalyticsOutlined,
  Article,
  ArticleOutlined,
  Hexagon,
  HexagonOutlined,
  Mail,
  Person,
  PersonOutlined,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { botpLogoImg } from "assets/images";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar({ drawerWidth }) {
  // Hook
  const [activePage, setActivePage] = useState(-1);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/identity":
        setActivePage(1);
        break;
      case "/provenance":
        setActivePage(2);
        break;
      case "/manual":
        setActivePage(3);
        break;
      case "/analyzer":
      default:
        setActivePage(0);
    }
  }, [pathname]);

  return SidebarView({ drawerWidth, activePage });
}

function SidebarView({ drawerWidth, activePage }) {
  const navigate = useNavigate();
  const primaryColor = (theme) => theme.palette.primary.main;

  const pageList = [
    [
      "Analyzer",
      <AnalyticsOutlined />,
      <Analytics sx={{ color: primaryColor }} />,
      "/analyzer",
    ],
    [
      "Identity",
      <PersonOutlined />,
      <Person sx={{ color: primaryColor }} />,
      "/identity",
    ],
    [
      "Provenance",
      <HexagonOutlined />,
      <Hexagon sx={{ color: primaryColor }} />,
      "/provenance",
    ],
    [
      "Manual",
      <ArticleOutlined />,
      <Article sx={{ color: primaryColor }} />,
      "/manual",
    ],
  ];

  return (
    <Box
      sx={{
        // bgcolor: "rgb(0, 0, 0, 0.075)",
        position: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "solid rgb(0, 0, 0, 0.1) 1px",
        zIndex: 1,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: drawerWidth,
            pl: 1,
          }}
        >
          <img src={botpLogoImg} alt="botp logo" width="32" height="32" />
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: 2, color: "#034266", fontWeight: "bold" }}
          >
            BOTP Dashboard
          </Typography>
        </Box>
      </Toolbar>
      <Box>
        <List>
          {pageList.map((button, index) => {
            const isSelected = index === activePage;

            return (
              <ListItem key={button[0]} disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    height: 60,
                    color: isSelected ? primaryColor : "",
                  }}
                  onClick={() => {
                    navigate(button[3]);
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 48 }}>
                    {isSelected ? button[2] : button[1]}
                  </ListItemIcon>
                  <Typography
                    children={button[0]}
                    variant="body1"
                    sx={
                      isSelected
                        ? {
                            color: primaryColor,
                            fontWeight: "bold",
                          }
                        : {}
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Toolbar />
    </Box>
  );
}

export default Sidebar;
