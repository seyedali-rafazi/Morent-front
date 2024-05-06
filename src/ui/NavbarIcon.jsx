import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import useUser from "../feachers/authentication/useUser";
import Loading from "./Loading";

function NavbarIcon() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const handelUser = () => {
    if (user) {
      navigate("/user-profile");
    } else if (!user) {
      navigate("/auth");
    }
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <FavoriteIcon />
      </IconButton>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <NotificationsIcon />
      </IconButton>
      <IconButton sx={{ display: { xs: "none", sm: "inline" } }}>
        <SettingsIcon />
      </IconButton>
      {isLoading ? (
        <Loading width="30px" color="primary.600" />
      ) : (
        <IconButton onClick={handelUser}>
          <Box
            sx={{ width: "34px", height: "34px" }}
            component="img"
            src="/photos/avatar.png"
          ></Box>
        </IconButton>
      )}
    </Box>
  );
}

export default NavbarIcon;
