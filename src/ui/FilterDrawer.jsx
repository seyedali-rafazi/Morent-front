import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useFilter } from "../context/FilterContext";
import Sidebar from "../components/available-car/Sidebar";

function FilterDrawer() {
  const { filterOpen, closeFilter } = useFilter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "right"}
      open={filterOpen}
      onClose={closeFilter}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(10, 25, 111, 0.25)",
          backdropFilter: "blur(4px)",
        },
        "& .MuiDrawer-paper": {
          width: isMobile ? "100%" : 360,
          maxHeight: isMobile ? "85vh" : "100%",
          borderTopLeftRadius: isMobile ? "20px" : 0,
          borderTopRightRadius: isMobile ? "20px" : 0,
          borderBottomLeftRadius: isMobile ? 0 : "20px",
          bgcolor: "#fff",
          boxShadow: "0 -8px 40px rgba(53, 99, 233, 0.15)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
          borderBottom: "1px solid",
          borderColor: "secondary.100",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FilterListIcon sx={{ color: "primary.600" }} />
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "18px" }}>
            Filter Cars
          </Typography>
        </Box>
        <IconButton onClick={closeFilter} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ py: 2, overflowY: "auto" }}>
        <Sidebar onApply={closeFilter} />
      </Box>
    </Drawer>
  );
}

export default FilterDrawer;
