import { Box, Container } from "@mui/material";
import React from "react";
import HomeBanner from "../components/home/HomeBanner";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        height: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
      }}
    >
      <Container sx={{ mt: { xs: "64px", md: "74px" } }}>
        <HomeBanner />
      </Container>
    </Box>
  );
}

export default Home;
