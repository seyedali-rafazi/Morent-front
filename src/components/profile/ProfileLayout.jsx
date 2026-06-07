import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function ProfileLayout({ children }) {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 68px)", md: "calc(100vh - 78px)" },
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 3 },
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "280px" },
            flexShrink: 0,
            position: { lg: "sticky" },
            top: { lg: 96 },
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            minWidth: 0,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileLayout;
