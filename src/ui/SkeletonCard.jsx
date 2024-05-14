import { Box, Skeleton } from "@mui/material";
import generateUniqueId from "generate-unique-id";
import React from "react";

function SkeletonCard({ cards }) {
  return Array.from({ length: cards }).map((_, index) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
        maxWidth: { xs: "300px", sm: "330px", md: "250px", lg: "270px" },
        bgcolor: "primary.100",
        p: "20px",
        minHeight: "330px",
        borderRadius: "10px",
      }}
      key={generateUniqueId()}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "10%" }} />
        </Skeleton>
      </Box>

      <Box
        sx={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      </Box>

      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "10%" }} />
      </Skeleton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width="20%">
          <div style={{ paddingTop: "50%" }} />
        </Skeleton>
        <Skeleton variant="rectangular" width="20%">
          <div style={{ paddingTop: "50%" }} />
        </Skeleton>
      </Box>
    </Box>
  ));
}

export default SkeletonCard;
