import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import RatingCar from "../../ui/Rating";
import {
  totalGrossPrice,
  totalOffAmount,
  totalPrice,
} from "../../utils/prices";

function CardSidebar({ cart }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        bgcolor: "primary.100",
        p: "15px",
        borderRadius: "8px",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontSize: "17px", fontWeight: "600" }}>
          Rental Summery
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "600", color: "secondary.200" }}
        >
          Prices may change depending on the length of the rental and the price
          of your rental car
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "2px solid",
          borderColor: "secondary.100",
        }}
      >
        <Box sx={{ width: "150px" }}>
          <img
            style={{ width: "100%" }}
            src={cart?.productDetail[0].imageLink}
            alt=""
          />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "17px", fontWeight: "600" }}>
            {cart?.productDetail[0].title} +{" "}
            <Typography
              sx={{
                display: "inline-block",
                bgcolor: "primary.600",
                px: "5px",
                borderRadius: "50%",
                color: "primary.100",
              }}
            >
              {cart?.productDetail.length}
            </Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <RatingCar />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", fontWeight: "400", color: "secondary.300" }}
          >
            Subtotal
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>
            ${totalGrossPrice(cart?.productDetail)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", fontWeight: "400", color: "secondary.300" }}
          >
            Tax
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>$0</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", fontWeight: "400", color: "secondary.300" }}
          >
            Discount
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>
            ${totalOffAmount(cart?.productDetail)}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", bgcolor: "#F3F8FF" }}>
          <TextField
            id="fullWidth"
            label="Filled"
            variant="filled"
            fullWidth
            sx={{
              backgroundColor: "#F3F8FF",
              border: "none", // Remove the bottom border

              "& .MuiFilledInput-root": {
                backgroundColor: "#F3F8FF",
                border: "none", // Remove the bottom border
              },
            }}
          />
          <Button sx={{ width: "200px" }}>Apply Now</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: "17px", fontWeight: "600" }}>
            Total Rental Price
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "12px", fontWeight: "600", color: "secondary.200" }}
          >
            Overall price and includes rental discount
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
            ${totalPrice(cart?.productDetail)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSidebar;
