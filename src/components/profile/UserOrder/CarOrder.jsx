import { Box, Typography } from "@mui/material";
import React from "react";
import CarPrice from "../../../ui/CarPrice";

function CarOrder({ car }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
        bgcolor: "primary.100",
        p: "20px",
        minHeight: "330px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "700" }}>
            {car.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "secondary.200",
            }}
          >
            {car.typecars}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "150px",
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
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={car.imageLink}
          alt={car.title}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CarPrice car={car} />
      </Box>
    </Box>
  );
}

export default CarOrder;
