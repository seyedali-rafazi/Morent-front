import { Box } from "@mui/material";
import React from "react";
import CardSidebar from "./CardSidebar";
import UserCardInfo from "./UserCardInfo";
import EmptyPage from "../../ui/EmptyPage";

function CardSection({ cart }) {
  return cart.productDetail.length == 0 ? (
    <EmptyPage
      buttonContent="Back to menu"
      emptySection="User Payment"
      path="/available-cars"
      bodyContent="You do not added any car to your card"
    />
  ) : (
    <Box>
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
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              Width: { xs: "100%", md: "64%" },
              px: "15px",
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
            <CardSidebar cart={cart} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSection;
