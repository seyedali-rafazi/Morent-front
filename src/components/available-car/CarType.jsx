import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function CarType({ queryValue, products, checkboxLabel = "" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set(queryValue, value);
        return newParams;
      });
    } else {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.delete(queryValue, value);
        return newParams;
      });
    }
  };

  const handleCheckFill = (productId) => {
    if (selectedCheckbox !== productId) {
      setSelectedCheckbox(productId);
    } else {
      setSelectedCheckbox(null);
    }
  };

  return (
    <FormGroup>
      {products.map((product) => (
        <FormControlLabel
          key={product._id}
          value={product.title}
          onClick={(e) => handleCheckBox(e)}
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "primary.600",
                },
              }}
              checked={selectedCheckbox === product._id}
              onChange={(e) => handleCheckFill(product._id)}
            />
          }
          checked={selectedCheckbox === product._id}
          label={`${product.title} ${checkboxLabel}`}
        />
      ))}
    </FormGroup>
  );
}

export default CarType;
