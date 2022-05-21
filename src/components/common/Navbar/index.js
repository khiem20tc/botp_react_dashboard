import {
  AccountCircle,
  Language,
  Mail,
  More,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { signOutAction } from "actions/user";
// import { botpLogoImg } from "assets/images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ drawerWidth }) {
  // State
  const avatarUrl = useSelector((state) => state.user.info.avatar);
  const agentName = useSelector((state) => state.user.info.kyc?.name);
  // Dispatch
  const dispatch = useDispatch();
  const dispatchSignOut = () => dispatch(signOutAction());

  // Hook
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const onSignOut = () => {
    dispatchSignOut();
    handleMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onSignOut}>Sign out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
        </IconButton>
        <p>Languages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      position="fixed"
      sx={{
        // flexGrow: 1,
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        zIndex: 2,
      }}
    >
      <AppBar
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "solid rgb(0, 0, 0, 0.1) 1px",
          bgcolor: "#ffffff",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show language"
              color="inherit"
              sx={{ marginRight: 1 }}
            >
              <Badge badgeContent={"EN"} color="info">
                <Language />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              sx={{ marginRight: 2 }}
            >
              <Badge badgeContent={1} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              aria-label="profile"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                src={avatarUrl}
                children={String(agentName.split(" ")[0][0]).toUpperCase()}
                variant="circular"
                sx={{ width: 36, height: 36 }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <More />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default Navbar;
