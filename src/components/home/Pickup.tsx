import { Box, Button, TextField } from "@mui/material";
import DatePickerCar from "./DatePickerCar";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pickup() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/available-cars?search=${encodeURIComponent(searchInput)}`, {
      replace: false,
    });
  };

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
        {/* <PickCity /> */}
        <DemoItem label={"Search"} sx={{ width: "100%", flexGrow: "1" }}>
          <TextField
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </DemoItem>
        <DatePickerCar status={"Pick Up"} />
        <DatePickerCar status={"Drop Off"} />
        <Button
          variant="contained"
          onClick={handleSubmit}
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
