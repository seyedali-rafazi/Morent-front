import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Chip,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import useUser from "../../../feachers/authentication/useUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../../../ui/Loading";

interface DashboardStats {
  favoriteCount: number;
  orderCount: number;
  cartCount: number;
}

const statCards = [
  {
    key: "favorites",
    label: "Favourite Cars",
    icon: FavoriteIcon,
    gradient: "linear-gradient(135deg, #FF6B8A 0%, #FF4423 100%)",
    path: "/user-profile/user-favourit",
    getValue: (data: DashboardStats) => data.favoriteCount,
  },
  {
    key: "orders",
    label: "Total Rentals",
    icon: DirectionsCarIcon,
    gradient: "linear-gradient(135deg, #54A6FF 0%, #3563E9 100%)",
    path: "/user-profile/user-order",
    getValue: (data: DashboardStats) => data.orderCount,
  },
  {
    key: "cart",
    label: "Cart Items",
    icon: ShoppingBagOutlinedIcon,
    gradient: "linear-gradient(135deg, #9CD323 0%, #2A9D8F 100%)",
    path: "/user-card",
    getValue: (data: DashboardStats) => data.cartCount,
  },
];

function UserDashboard() {
  const { payments, isLoading, user, cart } = useUser();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
        <Loading width="100px" color="blue" />
      </Box>
    );
  }

  const favoriteCount = user?.favoriteProduct?.length || 0;
  const orderCount = payments?.length || 0;
  const cartCount =
    user?.cart?.productDetail?.length || cart?.productDetail?.length || 0;
  const stats = { favoriteCount, orderCount, cartCount };
  const profileComplete = user?.name && user?.email ? 85 : 45;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A196F 0%, #3563E9 60%, #658DF1 100%)",
          borderRadius: "24px",
          p: { xs: 3, md: 4 },
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(53, 99, 233, 0.25)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: -30,
            top: -30,
            width: 180,
            height: 180,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.08)",
          }}
        />
        <Typography sx={{ fontSize: { xs: "22px", md: "28px" }, fontWeight: 800, mb: 1 }}>
          Welcome back, {user?.name?.split(" ")[0] || "Driver"} 👋
        </Typography>
        <Typography sx={{ color: "primary.300", fontSize: "15px", maxWidth: 480, lineHeight: 1.6 }}>
          Manage your rentals, favourites, and cart — all in one place.
        </Typography>
        <Box sx={{ mt: 3, maxWidth: 360 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>Profile completion</Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 700 }}>{profileComplete}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={profileComplete}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: "rgba(255,255,255,0.2)",
              "& .MuiLinearProgress-bar": { bgcolor: "#fff", borderRadius: 4 },
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={2.5}>
        {statCards.map(({ key, label, icon: Icon, gradient, path, getValue }) => (
          <Grid item xs={12} sm={4} key={key}>
            <Box
              component={Link}
              to={path}
              sx={{
                display: "block",
                textDecoration: "none",
                bgcolor: "#fff",
                borderRadius: "20px",
                p: 2.5,
                border: "1px solid",
                borderColor: "secondary.100",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 40px rgba(53, 99, 233, 0.12)",
                  borderColor: "primary.300",
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    background: gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  <Icon sx={{ color: "#fff", fontSize: 26 }} />
                </Box>
                <ArrowForwardIcon sx={{ color: "secondary.300", fontSize: 18 }} />
              </Box>
              <Typography
                sx={{ mt: 2, fontSize: "32px", fontWeight: 800, color: "secondary.main", lineHeight: 1 }}
              >
                {getValue(stats)}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: "14px", fontWeight: 600, color: "secondary.400" }}>
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "20px",
          p: 3,
          border: "1px solid",
          borderColor: "secondary.100",
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "secondary.main", mb: 2 }}>
          Quick Actions
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          <Button
            component={Link}
            to="/available-cars"
            variant="contained"
            sx={{ bgcolor: "primary.600", borderRadius: "12px", textTransform: "none", fontWeight: 600 }}
          >
            Browse Cars
          </Button>
          <Button
            component={Link}
            to="/user-card"
            variant="outlined"
            sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 600, borderColor: "primary.300" }}
          >
            View Cart
          </Button>
          <Button
            component={Link}
            to="/Complete-profile"
            variant="outlined"
            sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 600, borderColor: "secondary.200" }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>

      {favoriteCount > 0 && (
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "20px",
            p: 3,
            border: "1px solid",
            borderColor: "secondary.100",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "secondary.main" }}>
              Recent Favourites
            </Typography>
            <Button
              component={Link}
              to="/user-profile/user-favourit"
              size="small"
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              View all
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {user?.favoriteProduct.slice(0, 3).map((car) => (
              <Box
                key={car._id}
                component={Link}
                to={`/car-rent/${car._id}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: "14px",
                  border: "1px solid",
                  borderColor: "secondary.100",
                  textDecoration: "none",
                  flex: { xs: "1 1 100%", sm: "1 1 auto" },
                  minWidth: 200,
                  "&:hover": { bgcolor: "primary.200", borderColor: "primary.300" },
                }}
              >
                <Avatar
                  src={car.imageLink}
                  variant="rounded"
                  sx={{ width: 56, height: 40, bgcolor: "#F3F8FF" }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "secondary.main" }}>
                    {car.title}
                  </Typography>
                  <Chip label={car.typecars} size="small" sx={{ height: 20, fontSize: "10px", mt: 0.3 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default UserDashboard;
