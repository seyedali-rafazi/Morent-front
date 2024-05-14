import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SortedCars from "./SortedCars";

function RecentCars() {
  const [carSort, setCarSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    let sortValue = event.target.value;
    setCarSort(sortValue);
    if (sortValue == "") {
      searchParams.delete("sort", carSort);
    }
    setSearchParams({ sort: sortValue });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "secondary.200", fontSize: "15px" }}
        >
          Sorted Car
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <Select
            value={carSort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={"latest"}>latest</MenuItem>
            <MenuItem value={"earliest"}>earliest</MenuItem>
            <MenuItem value={"popular"}>popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SortedCars />
    </Box>
  );
}

export default RecentCars;
