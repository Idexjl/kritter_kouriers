import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Login from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import AppRegistrationRounded from "@mui/icons-material/AppRegistrationRounded";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";

import "./UserProfile.css";

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = () => {
    if (loggedIn) {
      return (
        <>
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            My Transports
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setLoggedIn(false)}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Log out
          </MenuItem>
        </>
      );
    } else {
      return (
        <>
          <MenuItem onClick={() => setLoggedIn(true)}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Log In
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <AppRegistrationRounded fontSize="small" />
            </ListItemIcon>
            Register
          </MenuItem>
        </>
      );
    }
  };

  const renderAvatar = () => {
    if (loggedIn) {
      return <Avatar sx={{ width: 32, height: 32 }}>AS</Avatar>;
    } else {
      return (
        <>
          <Avatar sx={{ width: 32, height: 32 }}>
            <PersonAdd fontSize="small" />
          </Avatar>
        </>
      );
    }
  };

  return (
    <>
      <section className="userprofile-main">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {renderAvatar()}
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {renderMenu()}
        </Menu>
      </section>
    </>
  );
};

export default UserProfile;
