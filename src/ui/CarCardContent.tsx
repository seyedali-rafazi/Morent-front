import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LikeCars from "./LikeCars";
import CarInformation from "./CarInformation";
import OrderBuuton from "./Buuton";
import CarPrice from "./CarPrice";
import { useNavigate } from "react-router-dom";
import type { Car } from "../types";
import type { SyntheticEvent } from "react";

interface CarCardContentProps {
  car: Car;
}

const CardRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  minHeight: "360px",
  borderRadius: "16px",
  border: "1px solid #E0E9F4",
  transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 20px 40px rgba(53, 99, 233, 0.12)",
    borderColor: "#AEC8FC",
  },
});

const CardHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const CarImageWrap = styled("div")({
  height: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "12px",
  backgroundColor: "#F3F8FF",
});

const CarImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  transition: "transform 0.35s ease",
  [`${CardRoot}:hover &`]: {
    transform: "scale(1.05)",
  },
});

const CardFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "auto",
});

function CarCardContent({ car }: CarCardContentProps) {
  const navigate = useNavigate();

  return (
    <CardRoot>
      <CardHeader>
        <div>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "700" }}>
            {car.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#90A3BF",
            }}
          >
            {car.typecars}
          </Typography>
        </div>
        <LikeCars id={car._id} />
      </CardHeader>

      <CarImageWrap>
        <CarImage
          src={car.imageLink}
          alt={car.title}
          onError={(e: SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/photos/logo.svg";
          }}
        />
      </CarImageWrap>

      <CarInformation car={car} />
      <CardFooter>
        <CarPrice car={car} />
        <OrderBuuton onClick={() => navigate(`/car-rent/${car._id}`)}>
          Rent Now
        </OrderBuuton>
      </CardFooter>
    </CardRoot>
  );
}

export default CarCardContent;
