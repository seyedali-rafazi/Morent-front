import useUser from "../../../feachers/authentication/useUser";
import { Box, Grid } from "@mui/material";
import Loading from "../../../ui/Loading";
import FavouriteCard from "./FavouriteCard";
import EmptyPage from "../../../ui/EmptyPage";

function UserFavourit() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box>
      {user?.favoriteProduct == 0 ? (
        <EmptyPage
          emptySection="Favoutit List"
          bodyContent="You have not any favourite car "
          buttonContent="Car Menu"
          path="/available-cars"
        />
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <FavouriteCard products={user?.favoriteProduct} />
        </Grid>
      )}
    </Box>
  );
}

export default UserFavourit;
