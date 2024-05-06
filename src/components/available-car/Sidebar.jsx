import { Box, Grid, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import CarType from "./CarType";
import useGetAllCategory from "../../feachers/cars/useGetAllCategory";
import { useSearchParams } from "react-router-dom";

const capacites = [
  {
    _id: 1,
    title: "2",
  },
  {
    _id: 2,
    title: "4",
  },
  {
    _id: 3,
    title: "6",
  },
];

function Sidebar() {
  const { carGroups, isLoading } = useGetAllCategory();
  const [price, setPrice] = useState(250);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
    setSearchParams({ offPrice: newValue });
  };

  console.log(price);

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
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px" }}
        >
          TYPE
        </Typography>
        <CarType queryValue="carGroup" products={carGroups} />
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px" }}
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
          sx={{ color: "secondary.300", fontSize: "12px", mb: "12px" }}
        >
          CAPACITY
        </Typography>
        <Slider
          sx={{ color: "primary.600" }}
          defaultValue={250}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={1000}
          value={price}
          onChangeCommitted={handlePriceChange}
        />
        <Typography
          variant="h3"
          sx={{ color: "secondary.700", fontSize: "16px", mb: "12px" }}
        >
          Max. ${price}
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
