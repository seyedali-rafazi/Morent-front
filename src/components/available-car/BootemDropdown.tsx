import { Box, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useFilter } from "../../context/FilterContext";

function BootemDropdown() {
  const { openFilter } = useFilter();

  return (
    <Box sx={{ px: "10px", display: { xs: "block", md: "none" } }}>
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={openFilter}
        sx={{
          color: "primary.100",
          bgcolor: "primary.600",
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(53,99,233,0.35)",
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Filter Cars
      </Button>
    </Box>
  );
}

export default BootemDropdown;
