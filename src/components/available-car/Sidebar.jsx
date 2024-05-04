import { Box, Grid } from "@mui/material";
import React from "react";
import CarType from "./CarType";

function Sidebar() {
  return (
    <Grid item xs={3}>
      <Box sx={{ height: "100%", mt: { xs: "64px", md: "74px" }, p: "15px" }}>
        <CarType />
      </Box>
    </Grid>
  );
}

export default Sidebar;
