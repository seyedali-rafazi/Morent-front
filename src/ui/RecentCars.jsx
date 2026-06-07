import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SortedCars from "./SortedCars";

function RecentCars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const carSort = searchParams.get("sort") || "";

  const handleChange = (event) => {
    const sortValue = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (sortValue) {
        newParams.set("sort", sortValue);
      } else {
        newParams.delete("sort");
      }
      return newParams;
    });
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
          sx={{ color: "secondary.200", fontSize: "15px", fontWeight: 700 }}
        >
          Recommended Cars
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
          <Select
            value={carSort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Sort cars" }}
            sx={{ borderRadius: "10px" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="earliest">Earliest</MenuItem>
            <MenuItem value="popular">Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SortedCars />
    </Box>
  );
}

export default RecentCars;
