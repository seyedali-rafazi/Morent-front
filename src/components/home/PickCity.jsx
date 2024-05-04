import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { germanCitys } from "../../utils/cityName";
import { useState } from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

function PickCity() {
  const [locations, setLocations] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangeSelect = (event) => {
    setLocations(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl sx={{ width: "100%" }}>
      <DemoItem label="City">
        <InputLabel sx={{ top: "20px" }} id="demo-multiple-name-label">
          Locations
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={locations}
          label="Locations"
          onChange={handleChangeSelect}
        >
          {germanCitys.map((germanCity) => (
            <MenuItem key={germanCity.id} value={germanCity.name}>
              {germanCity.name}
            </MenuItem>
          ))}
        </Select>
      </DemoItem>
    </FormControl>
  );
}

export default PickCity;
