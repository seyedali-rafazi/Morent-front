import useCarById from "../../feachers/cars/useCarById";
import useAddToCard from "../../feachers/payment/useAddToCard";
import { Box, Typography } from "@mui/material";
import RatingCar from "../../ui/Rating";
import CarDetails from "./CarDetails";
import OrderBuuton from "../../ui/Buuton";
import CarPrice from "../../ui/CarPrice";
import LikeCars from "../../ui/LikeCars";
import CarDetaliSleleton from "./CarDetaliSleleton";
import Car3DViewer from "../../ui/Car3DViewer";

function CarDetail() {
  const { isLoading, product } = useCarById();
  const { addCar } = useAddToCard();

  return isLoading ? (
    <CarDetaliSleleton />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.100",
          borderRadius: "20px",
          p: { xs: "16px", md: "24px" },
          border: "1px solid",
          borderColor: "secondary.100",
          boxShadow: "0 8px 32px rgba(53, 99, 233, 0.08)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "18px", md: "22px" },
            color: "secondary.main",
            mb: 2,
          }}
        >
          BMW M4 — 360° Interactive View
        </Typography>
        <Car3DViewer />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          minHeight: "400px",
          bgcolor: "primary.100",
          borderRadius: "20px",
          p: { xs: "20px", md: "30px" },
          border: "1px solid",
          borderColor: "secondary.100",
          boxShadow: "0 8px 32px rgba(53, 99, 233, 0.08)",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pr: { md: 3 },
          }}
        >
          <Box
            component="img"
            src={product.imageLink}
            alt={product.title}
            onError={(e) => {
              e.currentTarget.src = "/photos/logo.svg";
            }}
            sx={{
              width: "100%",
              maxWidth: 360,
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: 2,
            pt: { xs: 3, md: 0 },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "24px", fontWeight: "800", color: "secondary.main" }}
              >
                {product.title}
              </Typography>
              <LikeCars id={product._id} />
            </Box>
            <RatingCar />
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "secondary.400", textAlign: "justify", lineHeight: 1.7 }}
          >
            {product.description}
          </Typography>
          <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <CarDetails product={product} />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CarPrice car={product} />
            <OrderBuuton onClick={() => addCar(product._id)} id={product._id}>
              Rent Now
            </OrderBuuton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CarDetail;
