import { Box, Typography } from "@mui/material";
import React from "react";

function SecuredPyment() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        border: "2px solid black",
        borderColor: "secondary.100",
        borderRadius: "8px",
        p: "15px",
        bgcolor: "primary.100",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "800" }}>
        Secured payment guarantee
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "13px" }}>
        Your payment card details are protected in accordance with PCI DSS.
      </Typography>
    </Box>
  );
}

export default SecuredPyment;
