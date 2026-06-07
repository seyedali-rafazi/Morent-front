import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useState, type FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

function SearchInput({ compact = false }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { openFilter } = useFilter();

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    navigate(`/available-cars?search=${encodeURIComponent(searchValue)}`, {
      replace: false,
    });
  };

  const handleFilterClick = () => {
    if (location.pathname !== "/available-cars") {
      navigate("/available-cars");
    }
    openFilter();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: "4px 6px",
        display: "flex",
        alignItems: "center",
        width: compact ? "100%" : { xs: "100%", md: "380px", lg: "420px" },
        borderRadius: "14px",
        border: "1px solid",
        borderColor: "secondary.100",
        bgcolor: "rgba(255,255,255,0.95)",
        transition: "all 0.25s ease",
        "&:focus-within": {
          borderColor: "primary.400",
          boxShadow: "0 0 0 3px rgba(53, 99, 233, 0.12)",
        },
      }}
    >
      <IconButton
        onClick={handleSubmit}
        type="submit"
        sx={{
          p: "8px",
          bgcolor: "primary.600",
          color: "#fff",
          borderRadius: "10px",
          ml: 0.5,
          "&:hover": { bgcolor: "primary.700" },
        }}
        aria-label="search"
      >
        <SearchIcon sx={{ fontSize: 20 }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1.5, flex: 1, fontSize: "14px" }}
        placeholder="Search cars by name or type..."
        inputProps={{ "aria-label": "search cars" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={handleFilterClick}
        sx={{
          p: "8px",
          color: "primary.600",
          borderRadius: "10px",
          "&:hover": { bgcolor: "primary.200" },
        }}
        aria-label="open filters"
      >
        <TuneIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
