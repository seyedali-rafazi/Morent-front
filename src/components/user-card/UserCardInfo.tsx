import { Box } from "@mui/material";
import React from "react";
import BillingInfo from "./BillingInfo";
import Confirmation from "./Confirmation";

function UserCardInfo() {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <BillingInfo />
      <Confirmation />
    </Box>
  );
}

export default UserCardInfo;
