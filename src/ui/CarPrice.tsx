import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { Car } from "../types";

interface CarPriceProps {
  car: Car;
}

const PriceRow = styled("div")({
  display: "flex",
  alignItems: "center",
});

const MutedText = styled(Typography)({
  fontSize: "12px",
  marginTop: "3px",
  color: "#90A3BF",
});

const OriginalPrice = styled(Typography)({
  fontWeight: 500,
  fontSize: "13px",
  color: "#90A3BF",
  textDecoration: "line-through",
});

function CarPrice({ car }: CarPriceProps) {
  return (
    <div>
      <PriceRow>
        <Typography sx={{ fontWeight: "600" }}>
          ${car.offPrice}/&nbsp;
        </Typography>
        <MutedText>Day</MutedText>
      </PriceRow>
      {car.discount !== 0 && <OriginalPrice>${car.price}</OriginalPrice>}
    </div>
  );
}

export default CarPrice;
