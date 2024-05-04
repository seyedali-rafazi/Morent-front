import { Radio } from "@mui/material";
import React, { useState } from "react";

function PickRadio() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Radio
      checked={selectedValue === "a"}
      onChange={handleChange}
      value="a"
      name="radio-buttons"
      inputProps={{ "aria-label": "A" }}
      sx={{
        color: "primary.main", // Set the color of the unchecked radio button
        "&.Mui-checked": {
          color: "#87CEEB", // Set the color of the checked radio button
        },
      }}
    />
  );
}

export default PickRadio;
