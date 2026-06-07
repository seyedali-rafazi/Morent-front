import { Box, Typography, Avatar, Divider, Chip } from "@mui/material";
import NavOptions from "../ui/NavOptions";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import LogoutButton from "../feachers/authentication/LogoutButton";
import useUser from "../feachers/authentication/useUser";
import ProfileLayout from "../components/profile/ProfileLayout";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user } = useUser();
  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <ProfileLayout>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "secondary.100",
          boxShadow: "0 8px 32px rgba(53, 99, 233, 0.08)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #0A196F 0%, #3563E9 100%)",
            p: 3,
            textAlign: "center",
          }}
        >
          <Avatar
            src="/photos/avatar.png"
            sx={{
              width: 72,
              height: 72,
              mx: "auto",
              mb: 1.5,
              border: "3px solid rgba(255,255,255,0.4)",
              bgcolor: "primary.400",
              fontWeight: 800,
              fontSize: "1.4rem",
            }}
          >
            {initials || "M"}
          </Avatar>
          <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "18px" }}>
            {user?.name || "Guest User"}
          </Typography>
          <Typography sx={{ color: "primary.300", fontSize: "13px", mt: 0.5 }}>
            {user?.email || "demo@morent.com"}
          </Typography>
          <Chip
            label="Premium Member"
            size="small"
            sx={{
              mt: 1.5,
              bgcolor: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "11px",
            }}
          />
        </Box>

        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            sx={{
              px: 1.5,
              py: 1,
              fontSize: "11px",
              fontWeight: 700,
              color: "secondary.300",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Menu
          </Typography>

          <NavOptions path="/user-profile/dashboard">
            <TbLayoutDashboard size={20} />
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>Dashboard</Typography>
          </NavOptions>
          <NavOptions path="/user-profile/user-order">
            <FaCarRear size={18} />
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>My Rentals</Typography>
          </NavOptions>
          <NavOptions path="/user-profile/user-favourit">
            <IoIosHeart size={20} />
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>Favourites</Typography>
          </NavOptions>
          <NavOptions path="/user-card">
            <HiOutlineShoppingBag size={20} />
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>My Cart</Typography>
          </NavOptions>

          <Divider sx={{ my: 1.5 }} />

          <Box
            component={Link}
            to="/available-cars"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 1.2,
              borderRadius: "12px",
              color: "primary.600",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              "&:hover": { bgcolor: "primary.200" },
            }}
          >
            <FaCarRear size={16} />
            Browse Cars
          </Box>

          <LogoutButton />
        </Box>
      </Box>
    </ProfileLayout>
  );
}

export default UserProfile;
