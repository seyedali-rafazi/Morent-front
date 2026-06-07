import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { HiMiniUsers } from "react-icons/hi2";
import type { Car } from "../types";

interface CarInformationProps {
  car: Car;
}

const InfoRow = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  gap: "5px",
  alignItems: "center",
});

const InfoItem = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#90A3BF",
  gap: "3px",
});

function CarInformation({ car }: CarInformationProps) {
  return (
    <InfoRow>
      <InfoItem>
        <FaGasPump style={{ fontSize: "17px" }} />
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {car.gasoline}&nbsp;L/mile
        </Typography>
      </InfoItem>
      <InfoItem>
        <TbManualGearbox style={{ fontSize: "17px" }} />
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {car.steering}&nbsp;
        </Typography>
      </InfoItem>
      <InfoItem>
        <HiMiniUsers style={{ fontSize: "17px" }} />
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {car.capacity}&nbsp;People
        </Typography>
      </InfoItem>
    </InfoRow>
  );
}

export default CarInformation;
