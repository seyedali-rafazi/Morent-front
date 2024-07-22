import { Box } from "@mui/material";
import React from "react";

function HomeBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        mx: "auto",
        mt: "40px",
      }}
    >
      <Box
        sx={{ width: { xs: "100%", md: "50%" } }}
        component="img"
        src="/photos/blue-cover.svg"
      ></Box>
      <Box
        sx={{
          display: { xs: "none", md: "inline" },
          width: "50%",
        }}
        component="img"
        src="/photos/darkblue-cover.svg"
      ></Box>
    </Box>
  );
}

export default HomeBanner;
