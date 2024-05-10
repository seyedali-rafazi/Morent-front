import { Box, IconButton, Backdrop, CircularProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
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

  const handelFavourite = () => {
    if (user) {
      navigate("/user-profile/user-favourit");
    } else if (!user) {
      navigate("/auth");
    }
  };

  const handelCard = () => {
    if (user) {
      navigate("/user-profile/user-order");
    } else if (!user) {
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
      {isLoading ? (
        <IconButton>
          <Loading color="blue" width="24px" />
        </IconButton>
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
