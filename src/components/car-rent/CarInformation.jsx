import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import useCarById from "../../feachers/cars/useCarById";
import LikeCars from "../../ui/LikeCars";
import Loading from "../../ui/Loading";
import CarPrice from "../../ui/CarPrice";
import OrderBuuton from "../../ui/Buuton";
import CarDetails from "./CarDetails";
import useAddToCard from "../../feachers/payment/useAddToCard";
import RecentCars from "../../ui/RecentCars";
import RatingCar from "../../ui/Rating";

function CarInformation() {
  const { isLoading, product } = useCarById();
  const { addCar, isPending } = useAddToCard();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "500px",
          bgcolor: "primary.100",
          borderRadius: "15px",
          p: "15px",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={product.imageLink}
            alt={product.title}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            px: "20px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                {product.title}
              </Typography>
              <LikeCars id={product._id} />
            </Box>
            <RatingCar />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "secondary.400", textAlign: "justify" }}
            >
              {product.description}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <CarDetails product={product} />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <CarPrice car={product} />
            </Box>
            <OrderBuuton onClick={() => addCar(product._id)} id={product._id}>
              Rent Now
            </OrderBuuton>
          </Box>
        </Box>
      </Box>
      <Box>
        <RecentCars />
      </Box>
    </Box>
  );
}

export default CarInformation;
