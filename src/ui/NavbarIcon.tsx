import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import type { User } from "../types";

interface NavbarIconProps {
  user?: User;
}

function NavbarIcon({ user }: NavbarIconProps) {
  const navigate = useNavigate();

  const handelUser = () => {
    if (user) {
      navigate("/user-profile");
    } else {
      navigate("/auth");
    }
  };

  const handelFavourite = () => {
    if (user) {
      navigate("/user-profile/user-favourit");
    } else {
      navigate("/auth");
    }
  };

  const handelCard = () => {
    if (user) {
      navigate("/user-card");
    } else {
      navigate("/auth");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handelFavourite}
        sx={{ display: { xs: "none", sm: "inline" } }}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        onClick={handelCard}
        sx={{ display: { xs: "none", sm: "inline" } }}
      >
        <ShoppingBasketIcon />
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
