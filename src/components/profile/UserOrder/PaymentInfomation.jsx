import { Paper, Typography } from "@mui/material";
import React from "react";

function PaymentInfomation({ i, length }) {
  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: "primary.700",
        minHeight: "100%",
        minWidth: "30%",
        borderRadius: "14px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "800",
          color: "primary.100",
          textAlign: "center",
        }}
      >
        Recent Transaction:
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "800",
          color: "primary.100",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        {i + 1} of {length}
      </Typography>
    </Paper>
  );
}

export default PaymentInfomation;
