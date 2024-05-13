import { Box, Typography } from "@mui/material";
import React from "react";
import useUser from "../../../feachers/authentication/useUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Loading from "../../../ui/Loading";

function UserDashboard() {
  const { payments, isLoading, user } = useUser();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Loading width="100px" color="blue" />
      </Box>
    );
  }

  const UserInformations = [
    {
      text: "Favourite Car",
      action: user.favoriteProduct.length,
      avatar: (
        <Box
          sx={{
            bgcolor: "#fabbcc",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FavoriteIcon sx={{ color: "#f0114c", fontSize: "70px" }} />
        </Box>
      ),
    },
    {
      text: "Total Orders",
      action: payments.length,
      avatar: (
        <Box
          sx={{
            bgcolor: "#a9e8bd",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountBalanceIcon sx={{ color: "#2dbd5b", fontSize: "70px" }} />
        </Box>
      ),
    },
    {
      text: "Card Items",
      action: user.cart.products.length,
      avatar: (
        <Box
          sx={{
            bgcolor: "#78beff",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MonetizationOnIcon sx={{ color: "#0c7feb", fontSize: "70px" }} />
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        p: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.100",
          p: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
          Profile Status
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: "700", color: "secondary.200" }}
        >
          See the status of your Profile in one view
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {UserInformations.map((UserInformation, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              width: "100%",
              bgcolor: "primary.100",
              p: "15px",
              borderRadius: "10px",
            }}
          >
            <Box>{UserInformation.avatar}</Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
                {UserInformation.text}
              </Typography>
              <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
                {UserInformation.action}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default UserDashboard;
