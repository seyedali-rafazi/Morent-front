import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/available-car/Sidebar";
import CarCard from "../ui/CarCard";
import useGetAllCars from "../feachers/cars/useGetAllCars";
import BootemDropdown from "../components/available-car/BootemDropdown";

function AvailableCars() {
  const { isLoading, products } = useGetAllCars();

  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        maxWidth: "1280px",
        width: "100%",
        display: "flex",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexGrow: "1",
          mt: { xs: "84px", md: "114px" },
        }}
      >
        <Box
          sx={{
            height: "100vh",
            px: "25px",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: "30px",
            width: "25%",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <BootemDropdown />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <CarCard products={products} lgCount={4} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default AvailableCars;
