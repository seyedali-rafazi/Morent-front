import React from "react";
import ProfileLayout from "../components/profile/ProfileLayout";
import { Box, Typography } from "@mui/material";
import NavOptions from "../ui/NavOptions";
import { TbHome } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";

function UserProfile() {

  return (
    <ProfileLayout>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "primary.100",
          p: "12px",
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: "15px",
            fontWeight: "600",
            color: "secondary.300",
          }}
        >
          Main Menu
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              sm: "center",
              md: "flex-start",
            },
            flexDirection: { xs: "row", md: "column" },
            height: "100%",
            overflow: "auto",
            flex: 1,
          }}
        >
          <NavOptions path="/user-profile/dashboard">
            <TbHome style={{}} />
            <Typography>Dashboard</Typography>
          </NavOptions>
          <NavOptions path="/user-profile/user-order">
            <FaCarRear />
            <Typography>Car Rent</Typography>
          </NavOptions>
          <NavOptions path="/user-profile/user-favourit">
            <IoIosHeart />
            <Typography>Favourits</Typography>
          </NavOptions>
        </Box>
      </Box>
    </ProfileLayout>
  );
}

export default UserProfile;
