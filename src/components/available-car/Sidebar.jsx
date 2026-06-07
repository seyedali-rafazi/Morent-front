import { Box, Button, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CarType from "./CarType";
import useGetAllCategory from "../../feachers/cars/useGetAllCategory";
import { useSearchParams } from "react-router-dom";

const capacites = [
  { _id: 1, title: "2" },
  { _id: 2, title: "4" },
  { _id: 3, title: "6" },
];

function Sidebar({ onApply }) {
  const { carGroups } = useGetAllCategory();
  const [searchParams, setSearchParams] = useSearchParams();
  const maxFromUrl = Number(searchParams.get("offPrice")) || 250;
  const [price, setPrice] = useState(maxFromUrl);

  useEffect(() => {
    setPrice(maxFromUrl);
  }, [maxFromUrl]);

  const handlePriceChange = (_event, newValue) => {
    setPrice(newValue);
  };

  const handlePriceCommit = (_event, newValue) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("offPrice", newValue);
      return newParams;
    });
  };

  const handleClearFilters = () => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.delete("carGroup");
      newParams.delete("capacite");
      newParams.delete("offPrice");
      return newParams;
    });
    setPrice(250);
  };

  return (
    <Box
      sx={{
        px: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        borderRadius: "15px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          TYPE
        </Typography>
        <CarType queryValue="carGroup" products={carGroups} />
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          CAPACITY
        </Typography>
        <CarType
          queryValue="capacite"
          products={capacites}
          checkboxLabel="Person"
        />
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          PRICE
        </Typography>
        <Slider
          sx={{ color: "primary.600" }}
          aria-label="Max price"
          valueLabelDisplay="auto"
          min={20}
          max={200}
          value={price}
          onChange={handlePriceChange}
          onChangeCommitted={handlePriceCommit}
        />
        <Typography
          variant="h3"
          sx={{ color: "secondary.700", fontSize: "16px", fontWeight: 600 }}
        >
          Max. ${price}.00
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1.5, pb: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleClearFilters}
          sx={{ borderColor: "secondary.200", color: "secondary.400" }}
        >
          Clear
        </Button>
        {onApply && (
          <Button
            variant="contained"
            fullWidth
            onClick={onApply}
            sx={{ bgcolor: "primary.600", boxShadow: "0 4px 14px rgba(53,99,233,0.35)" }}
          >
            Apply
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
