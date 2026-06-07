import { IconButton } from "@mui/material";
import useLikeCars from "../feachers/userServices/useLikeCars";
import useUser from "../feachers/authentication/useUser";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

interface LikeCarsProps {
  id: string;
}

function LikeCars({ id }: LikeCarsProps) {
  const { userFavourit } = useLikeCars();
  const { user } = useUser();

  const handeClickHeart = () => {
    userFavourit(id);
  };

  return !user ? (
    <CiHeart />
  ) : (
    <IconButton onClick={handeClickHeart} color="error">
      {user.favoriteProduct.map((favourit) => favourit._id).includes(id) ? (
        <FaHeart style={{ color: "red" }} />
      ) : (
        <CiHeart />
      )}
    </IconButton>
  );
}

export default LikeCars;
