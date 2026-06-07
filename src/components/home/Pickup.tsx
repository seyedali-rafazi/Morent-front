import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import DatePickerCar from "./DatePickerCar";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PickupRoot = styled("div")(({ theme }) => ({
  padding: "5px",
  backgroundColor: theme.palette.primary[100],
}));

const PickupForm = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignContent: "center",
  alignItems: "center",
  padding: "10px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

function Pickup() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/available-cars?search=${encodeURIComponent(searchInput)}`, {
      replace: false,
    });
  };

  return (
    <PickupRoot>
      <PickupForm>
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
      </PickupForm>
    </PickupRoot>
  );
}

export default Pickup;
