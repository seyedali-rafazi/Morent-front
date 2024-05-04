import { Box, Button } from "@mui/material";
import PickCity from "./PickCity";
import DatePickerCar from "./DatePickerCar";

function Pickup({ text }) {
  return (
    <Box sx={{ p: "5px", bgcolor: "primary.100" }}>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignContent: "center",
          alignItems: "center",
          p: "10px",
        }}
      >
        <PickCity />
        <DatePickerCar status={"Pick Up"} />
        <DatePickerCar status={"Drop Off"} />
        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.600",
            top: "14px",
            height: "56px",
            width: "100%",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default Pickup;
