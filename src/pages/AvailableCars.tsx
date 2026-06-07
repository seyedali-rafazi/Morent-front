import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/available-car/Sidebar";
import CarCard from "../ui/CarCard";
import useGetAllCars from "../feachers/cars/useGetAllCars";
import BootemDropdown from "../components/available-car/BootemDropdown";
import SkeletonCard from "../ui/SkeletonCard";

function AvailableCars() {
  const { isLoading, products } = useGetAllCars();

  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 68px)", md: "calc(100vh - 78px)" },
        maxWidth: "1680px",
        width: "100%",
        display: "flex",
        mx: "auto",
        pb: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexGrow: "1",
          mt: { xs: 2, md: 3 },
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
            p: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <BootemDropdown />
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                gap: "20px",
              }}
            >
              <SkeletonCard cards={9} />
            </Box>
          ) : (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
              <CarCard products={products} lgCount={4} />
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AvailableCars;
