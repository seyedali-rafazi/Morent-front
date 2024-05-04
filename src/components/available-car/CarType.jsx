import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

function CarType() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.append("set", value);
        return newParams;
      });
    } else {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.delete("set", value);
        return newParams;
      });
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        value="label"
        onClick={(e) => handleCheckBox(e)}
        control={<Checkbox />}
        label="Label"
      />
      <FormControlLabel
        value="Required"
        onClick={(e) => handleCheckBox(e)}
        control={<Checkbox />}
        label="Required"
      />
      <FormControlLabel
        value="Disabled"
        onClick={(e) => handleCheckBox(e)}
        control={<Checkbox />}
        label="Disabled"
      />
    </FormGroup>
  );
}

export default CarType;
