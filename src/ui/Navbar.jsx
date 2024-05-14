import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "./SearchInput";
import NavbarIcon from "./NavbarIcon";
import useUser from "../feachers/authentication/useUser";
import SidebarItems from "./SidebarItems";

const drawerWidth = 240;

function Navbar() {
  const { user, isLoading } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <SidebarItems user={user} />
    </Box>
  );

  return isLoading ? (
    <AppBar
      component="nav"
      sx={{
        bgcolor: "primary.100",
        height: "74px",
        py: { xs: "5px" },
      }}
    >
      <Skeleton variant="rectangular" width="100%">
        <div style={{ height: "74px" }} />
      </Skeleton>
    </AppBar>
  ) : (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "primary.100",
          height: { xs: "64px", md: "74px" },
          py: { xs: "5px" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "secondary.400" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: "20px",
            }}
          >
            <Box
              sx={{ my: "auto" }}
              component="img"
              src="/photos/logo.svg"
            ></Box>
            <SearchInput />
          </Box>
          <NavbarIcon user={user} />
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
