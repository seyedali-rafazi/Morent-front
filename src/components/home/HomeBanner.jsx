import { Box } from "@mui/material";
import React from "react";

function HomeBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        px: "15px",
        py: "35px",
      }}
    >
      <Box
        sx={{ width: { xs: "300px" , sm:"400px", md: "400px", lg: "550px" } }}
        component="img"
        src="/public/photos/blue-cover.svg"
      ></Box>
      <Box
        sx={{
          display: { xs: "none" , md:"inline"},
          width: { xs: "250px", md: "400px", lg: "550px" },
        }}
        component="img"
        src="/photos/darkblue-cover.svg"
      ></Box>
    </Box>
  );
}

export default HomeBanner;
