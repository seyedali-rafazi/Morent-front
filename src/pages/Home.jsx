import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import OrderInformation from "../components/home/OrderInformation";
import CarsList from "../components/home/CarsList";
import SortedCars from "../ui/SortedCars";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          mt: { xs: "64px", md: "74px" },
        }}
      >
        <HomeBanner />
        <OrderInformation />
        <CarsList />
      </Container>
    </Box>
  );
}

export default Home;
