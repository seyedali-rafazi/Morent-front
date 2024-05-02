import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

function NavbarIcon() {
  const navigate = useNavigate();
  const handelUser = () => {
    navigate("/auth");
  };
  return (
    <Box sx={{ display: "block" }}>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <FavoriteIcon />
      </IconButton>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <NotificationsIcon />
      </IconButton>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <SettingsIcon />
      </IconButton>
      <IconButton onClick={handelUser}>
        <Box
          sx={{ width: "34px", height: "34px" }}
          component="img"
          src="/photos/avatar.png"
        ></Box>
      </IconButton>
    </Box>
  );
}

export default NavbarIcon;
