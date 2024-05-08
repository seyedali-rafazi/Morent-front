import { Box, Typography } from "@mui/material";
import React from "react";

function CarDetails({ product }) {
  const carDetails = [
    { label: "Type Car", value: product.typecars },
    { label: "Capacity", value: `${product.capacity} Person` },
    { label: "Steering", value: product.steering },
    { label: "Gasoline", value: `${product.gasoline} L / Mile` },
  ];

  return carDetails.map((detail, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "50%",
        py: "20px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "secondary.300",
          fontWeight: "500",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        {detail.label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "secondary.400",
          fontWeight: "500",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        {detail.value}
      </Typography>
    </Box>
  ));
}

export default CarDetails;
