import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Badge,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import useUser from "../feachers/authentication/useUser";
import SidebarItems from "./SidebarItems";
const drawerWidth = 280;

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Browse", path: "/available-cars" },
];

function Navbar() {
  const { user, cart } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const cartCount = cart?.productDetail?.length || 0;
  const favCount = user?.favoriteProduct?.length || 0;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const goTo = (path: string) => {
    if (!user && path.startsWith("/user")) {
      navigate("/auth");
      return;
    }
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "primary.200" : "transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(53, 99, 233, 0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Box sx={{ maxWidth: "1680px", mx: "auto", width: "100%" }}>
          <Toolbar
            sx={{
              minHeight: { xs: "68px", md: "78px" },
              px: { xs: 2, md: 4 },
              gap: 2,
            }}
          >
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "secondary.500" }}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>

            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="/photos/logo.svg"
                alt="MORENT"
                sx={{ height: { xs: 32, md: 36 } }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 0.5,
                ml: 2,
              }}
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "10px",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: active ? "primary.600" : "secondary.400",
                      bgcolor: active ? "primary.200" : "transparent",
                      "&:hover": {
                        bgcolor: active ? "primary.200" : "secondary.100",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                maxWidth: { md: 440, lg: 480 },
                mx: "auto",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}>
                <SearchInput />
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton
                onClick={() => goTo("/user-profile/user-favourit")}
                sx={{ color: "secondary.400" }}
              >
                <Badge badgeContent={favCount} color="error" max={9}>
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={() => goTo("/user-card")}
                sx={{ color: "secondary.400", display: { xs: "none", sm: "inline-flex" } }}
              >
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
              <Button
                onClick={() => goTo("/user-profile")}
                sx={{
                  ml: 0.5,
                  minWidth: 0,
                  p: 0.5,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "primary.300",
                }}
              >
                <Box
                  component="img"
                  src="/photos/avatar.png"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%233563E9'/%3E%3Ctext x='20' y='26' text-anchor='middle' fill='white' font-size='16' font-family='sans-serif'%3E" +
                      (user?.name?.[0] || "M") +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                  alt="Profile"
                  sx={{ width: 36, height: 36, borderRadius: "50%" }}
                />
              </Button>
            </Box>
          </Toolbar>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              px: 2,
              pb: 1.5,
            }}
          >
            <SearchInput compact />
          </Box>
        </Box>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#fff",
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: "1px solid", borderColor: "secondary.100" }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
            MORENT
          </Typography>
          <Typography variant="caption" sx={{ color: "secondary.300" }}>
            Premium car rental
          </Typography>
        </Box>
        <SidebarItems user={user} onNavigate={handleDrawerToggle} />
      </Drawer>
    </>
  );
}

export default Navbar;
