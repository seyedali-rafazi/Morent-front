import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function CarType({ queryValue, products, checkboxLabel = "" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValue = searchParams.get(queryValue) || "";

  const handleChange = (title, checked) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (checked) {
        newParams.set(queryValue, title);
      } else {
        newParams.delete(queryValue);
      }
      return newParams;
    });
  };

  return (
    <FormGroup>
      {products.map((product) => {
        const isChecked = selectedValue === product.title;
        return (
          <FormControlLabel
            key={product._id}
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => handleChange(product.title, e.target.checked)}
                sx={{
                  "&.Mui-checked": {
                    color: "primary.600",
                  },
                }}
              />
            }
            label={`${product.title} ${checkboxLabel}`}
          />
        );
      })}
    </FormGroup>
  );
}

export default CarType;
