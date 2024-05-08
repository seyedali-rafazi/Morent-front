import { Box, Typography } from "@mui/material";
import React from "react";

function CarPrice({ car }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>
          ${car.offPrice}/&nbsp;
        </Typography>
        <Typography
          sx={{ fontSize: "12px", mt: "3px", color: "secondary.300" }}
        >
          Day
        </Typography>
      </Box>
      {car.discount == 0 ? (
        ""
      ) : (
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "13px",
            color: "secondary.300",
            textDecoration: "line-through",
          }}
        >
          ${car.price}
        </Typography>
      )}
    </Box>
  );
}

export default CarPrice;
