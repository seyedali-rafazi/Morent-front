import { Box, Typography } from "@mui/material";
import LikeCars from "./LikeCars";
import CarInformation from "./CarInformation";
import OrderBuuton from "./Buuton";
import CarPrice from "./CarPrice";
import { useNavigate } from "react-router-dom";

function CarCardContent({ car }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        bgcolor: "primary.100",
        p: "20px",
        minHeight: "360px",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "secondary.100",
        transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(53, 99, 233, 0.12)",
          borderColor: "primary.300",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "700" }}>
            {car.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "secondary.300",
            }}
          >
            {car.typecars}
          </Typography>
        </Box>
        <LikeCars id={car._id} />
      </Box>

      <Box
        sx={{
          height: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "12px",
          bgcolor: "#F3F8FF",
        }}
      >
        <Box
          component="img"
          src={car.imageLink}
          alt={car.title}
          onError={(e) => {
            e.currentTarget.src = "/photos/logo.svg";
          }}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.35s ease",
            ".MuiBox-root:hover &": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      <CarInformation car={car} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "auto",
        }}
      >
        <CarPrice car={car} />
        <OrderBuuton onClick={() => navigate(`/car-rent/${car._id}`)}>
          Rent Now
        </OrderBuuton>
      </Box>
    </Box>
  );
}

export default CarCardContent;
