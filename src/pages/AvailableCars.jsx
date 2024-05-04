import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/available-car/Sidebar";

function AvailableCars() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        maxWidth: "1280px",
        display: "flex",
        mx: "auto",
      }}
    >
      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
        <Sidebar />
        <Grid item xs={9}>
          <Box sx={{ height: "100%", bgcolor: "blue" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AvailableCars;
