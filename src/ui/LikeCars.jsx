import { IconButton } from "@mui/material";
import useLikeCars from "../feachers/userServices/useLikeCars";
import useUser from "../feachers/authentication/useUser";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function LikeCars({ id }) {
  const { userFavourit } = useLikeCars();
  const { isLoading, user } = useUser();
  const handeClickHeart = () => {
    userFavourit(id);
  };

  return !user ? (
    <CiHeart />
  ) : (
    <IconButton onClick={handeClickHeart} color="red">
      {user.favoriteProduct.map((favourit) => favourit._id).includes(id) ? (
        <FaHeart style={{ color: "red" }} />
      ) : (
        <CiHeart />
      )}
    </IconButton>
  );
}

export default LikeCars;
