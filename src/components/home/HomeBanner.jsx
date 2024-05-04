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
        maxWidth: { xs: "420px", lg: "550px" },
        mx: "auto",
        mt: "40px",
      }}
    >
      <Box
        sx={{ width: "100%" }}
        component="img"
        src="/public/photos/blue-cover.svg"
      ></Box>
      <Box
        sx={{
          display: { xs: "none", md: "inline" },
          width: "100%",
        }}
        component="img"
        src="/photos/darkblue-cover.svg"
      ></Box>
    </Box>
  );
}

export default HomeBanner;
