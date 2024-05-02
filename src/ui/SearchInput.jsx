import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        width: { xs: "350px", lg: "400px" },
        borderRadius: "8px",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search something here" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <TuneIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
