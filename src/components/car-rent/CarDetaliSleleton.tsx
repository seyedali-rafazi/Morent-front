import { Box, Skeleton } from "@mui/material";
import React from "react";

function CarDetaliSleleton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "500px",
        bgcolor: "primary.100",
        borderRadius: "15px",
        gap: "20px",
        p: "15px",
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", sm: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "70%" }} />
        </Skeleton>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          px: "20px",
          gap: "20px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "10%" }} />
          </Skeleton>
        </Box>

        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "50%" }} />
          </Skeleton>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Skeleton variant="rectangular" width="30%">
            <div style={{ paddingTop: "40%" }} />
          </Skeleton>
          <Skeleton variant="rectangular" width="30%">
            <div style={{ paddingTop: "40%" }} />
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
}

export default CarDetaliSleleton;
