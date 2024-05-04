import { Box, Typography } from "@mui/material";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { HiMiniUsers } from "react-icons/hi2";

function CarInformation({ car }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "secondary.300",
            gap: "3px",
          }}
        >
          <FaGasPump style={{ fontSize: "17px" }} />
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {car.gasoline}&nbsp;L/mile
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "secondary.300",
            gap: "3px",
          }}
        >
          <TbManualGearbox style={{ fontSize: "17px" }} />
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {car.steering}&nbsp;
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "secondary.300",
            gap: "3px",
          }}
        >
          <HiMiniUsers style={{ fontSize: "17px" }} />
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {car.capacity}&nbsp;People
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CarInformation;
