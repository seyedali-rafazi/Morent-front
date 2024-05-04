import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useGetAllCars from "../../feachers/cars/useGetAllCars";
import CarCard from "../../ui/CarCard";
import { useNavigate } from "react-router-dom";

function CarsList() {
  const { isLoading, products } = useGetAllCars();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography
        variant="h6"
        sx={{ fontSize: "15px", color: "secondary.300", pl: "15px" }}
      >
        Recomendation Car
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CarCard products={products} lgCount="3" />
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => navigate("/available-cars")}
          variant="contained"
          sx={{
            bgcolor: "primary.600",
          }}
        >
          Show more car
        </Button>
      </Box>
    </Box>
  );
}

export default CarsList;
