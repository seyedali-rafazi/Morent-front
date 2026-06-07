import { Box } from "@mui/material";
import RecentCars from "../../ui/RecentCars";
import CarDetail from "./CarDetail";

function CarInformation() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CarDetail />
      <Box>
        <RecentCars />
      </Box>
    </Box>
  );
}

export default CarInformation;
