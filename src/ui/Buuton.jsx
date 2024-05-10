import { Button } from "@mui/material";
import React from "react";
import useUser from "../feachers/authentication/useUser";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function OrderBuuton({ onClick, children, id }) {
  const { isLoading, cart, user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <Loading />;
  }

  if (user.cart.products.map((product) => product.productId).includes(id)) {
    return (
      <Button
        onClick={() => navigate("/user-card")}
        variant="contained"
        sx={{
          bgcolor: "primary.100",
          color: "primary.600",
          border: "1px solid",
          "&:hover": {
            bgcolor: "primary.400",
            color: "primary.100",
          },
        }}
      >
        See your card
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        bgcolor: "primary.600",
      }}
    >
      {children}
    </Button>
  );
}

export default OrderBuuton;
