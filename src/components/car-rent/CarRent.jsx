import { Box } from "@mui/material";
import React from "react";
import SecuredPyment from "./SecuredPyment";
import PickupInformation from "./PickupInformation";
import CarInformation from "./CarInformation";

function CarRent() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        maxWidth: "1280px",
        width: "100%",
        display: "flex",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexGrow: "1",
          mt: { xs: "84px", md: "114px" },
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
            px: "15px",
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            gap: "30px",
            width: "35%",
          }}
        >
          <SecuredPyment />
          <PickupInformation />
        </Box>
        <Box
          sx={{
            minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            px: "15px",
          }}
        >
          <CarInformation />
        </Box>
      </Box>
    </Box>
  );
}

export default CarRent;
