import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import HomeBanner from "../components/home/HomeBanner";
import OrderInformation from "../components/home/OrderInformation";
import CarsList from "../components/home/CarsList";
import useUser from "../feachers/authentication/useUser";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        pb: "15px",
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
