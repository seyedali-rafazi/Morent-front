import React from "react";
import useCarById from "../../feachers/cars/useCarById";
import useAddToCard from "../../feachers/payment/useAddToCard";
import { Box, Typography } from "@mui/material";
import RatingCar from "../../ui/Rating";
import CarDetails from "./CarDetails";
import OrderBuuton from "../../ui/Buuton";
import CarPrice from "../../ui/CarPrice";
import LikeCars from "../../ui/LikeCars";
import CarDetaliSleleton from "./CarDetaliSleleton";

function CarDetail() {
  const { isLoading, product } = useCarById();
  const { addCar } = useAddToCard();

  return isLoading ? (
    <CarDetaliSleleton />
  ) : (
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
          role="presentation"
          onError={(e) => {
            e.currentTarget.src = "/photos/bmw.webp";
          }}
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
  );
}

export default CarDetail;
