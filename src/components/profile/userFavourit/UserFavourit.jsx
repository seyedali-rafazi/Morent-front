import useUser from "../../../feachers/authentication/useUser";
import { Box, Grid } from "@mui/material";
import Loading from "../../../ui/Loading";
import FavouriteCard from "./FavouriteCard";

function UserFavourit() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box sx={{m:"10px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <FavouriteCard products={user?.favoriteProduct} />
      </Grid>
    </Box>
  );
}

export default UserFavourit;
