import { Box } from "@mui/material";
import React from "react";
import CardSidebar from "../components/user-card/CardSidebar";
import UserCardInfo from "../components/user-card/UserCardInfo";

function UserCard() {
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
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          flexGrow: "1",
          mt: { xs: "84px", md: "114px" },
        }}
      >
        <Box
          sx={{
            width: "64%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            bgcolor: "red",
          }}
        >
          <UserCardInfo />
        </Box>
        <Box
          sx={{
            height: "100vh",
            px: "20px",
            flexDirection: "column",
            width: { xs: "100%", md: "36%" },
          }}
        >
          <CardSidebar />
        </Box>
      </Box>
    </Box>
  );
}

export default UserCard;
