import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function PickupInformation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
        border: "2px solid black",
        borderColor: "secondary.100",
        borderRadius: "8px",
        p: "15px",
        bgcolor: "primary.100",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "800" }}>
        Pick-up and drop-off
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                minWidth: "10px",
                maxHeight: "10px",
                bgcolor: "secondary.200",
                borderRadius: "50%",
                mt: "7px",
              }}
            ></Box>
            <Box sx={{ fontSize: "15px" }}>May 15, 2024 12:00 PM</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pl: "15px",
            }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Berlin
            </Typography>
            <IconButton>
              <FmdGoodIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                minWidth: "10px",
                maxHeight: "10px",
                bgcolor: "secondary.200",
                borderRadius: "50%",
                mt: "7px",
              }}
            ></Box>
            <Box sx={{ fontSize: "15px" }}>May 15, 2024 12:00 PM</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pl: "15px",
            }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Hamburg
            </Typography>
            <IconButton>
              <FmdGoodIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PickupInformation;
