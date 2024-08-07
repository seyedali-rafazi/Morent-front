import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LikeCars from "../../../ui/LikeCars";

function FavouriteCard({ products }) {
  return products.map((car) => (
    <Grid item xs={12} md={6} key={car._id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          width: "100%",
          bgcolor: "primary.100",
          p: "20px",
          minHeight: "250px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: "111px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap" }}
            >
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
          <LikeCars id={car._id} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            role="presentation"
            onError={(e) => {
            e.currentTarget.src = "/photos/bmw.webp";
            }}
            style={{
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              objectPosition: "center",
            }}
            src={car.imageLink}
            alt={car.title}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.600",
            }}
          >
            Rent now
          </Button>
        </Box>
      </Box>
    </Grid>
  ));
}

export default FavouriteCard;
