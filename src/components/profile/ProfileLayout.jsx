import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function ProfileLayout({ children }) {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mt: { xs: "64px", md: "74px" },
      }}
    >
      <Box
        sx={{
          bgcolor: "red",
          minheight: { xs: "100px", md: "calc(100vh - 74px)" },
          width: { xs: "100%", md: "20%" },
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          minheight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default ProfileLayout;
