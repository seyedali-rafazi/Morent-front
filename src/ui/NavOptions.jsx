import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

function NavOptions({ path, children }) {
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            px: 1.5,
            py: 1.2,
            borderRadius: "12px",
            color: isActive ? "#fff" : "secondary.400",
            bgcolor: isActive ? "primary.600" : "transparent",
            boxShadow: isActive ? "0 4px 14px rgba(53, 99, 233, 0.35)" : "none",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: isActive ? "primary.600" : "primary.200",
              color: isActive ? "#fff" : "primary.main",
            },
          }}
        >
          {children}
        </Box>
      )}
    </NavLink>
  );
}

export default NavOptions;
