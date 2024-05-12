import { Box } from "@mui/material";
import React from "react";
import useUser from "../feachers/authentication/useUser";
import Loading from "../ui/Loading";
import CardSection from "../components/user-card/CardSection";

function UserCard() {
  const { cart, isLoading } = useUser();

  return isLoading ? (
    <Box
      sx={{
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        maxWidth: "1280px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <Loading width="100px" color="blue" />
    </Box>
  ) : (
    <CardSection cart={cart} />
  );
}

export default UserCard;
