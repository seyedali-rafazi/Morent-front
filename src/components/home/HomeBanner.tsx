import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

function HomeBanner() {
  return (
    <Box
      sx={
        {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mx: "auto",
          mt: { xs: 2, md: 4 },
        } as never
      }
    >
      <Box
        sx={{
          flex: 1,
          minHeight: { xs: 220, md: 320 },
          borderRadius: "24px",
          background: "linear-gradient(135deg, #3563E9 0%, #0A196F 100%)",
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(53, 99, 233, 0.25)",
        } as Record<string, unknown>}
      >
        <Box
          sx={{
            position: "absolute",
            right: -40,
            bottom: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.08)",
          }}
        />
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: 800,
            lineHeight: 1.15,
            mb: 2,
            maxWidth: 420,
          }}
        >
          Find, book and rent a car easily
        </Typography>
        <Typography
          sx={{
            color: "primary.300",
            fontSize: { xs: "14px", md: "16px" },
            mb: 3,
            maxWidth: 380,
            lineHeight: 1.6,
          } as Record<string, unknown>}
        >
          Discover premium vehicles with 360° views. Filter by type, capacity, and price — all in your browser.
        </Typography>
        <Button
          component={Link}
          to="/available-cars"
          variant="contained"
          sx={{
            alignSelf: "flex-start",
            bgcolor: "#fff",
            color: "primary.main",
            fontWeight: 700,
            px: 3,
            py: 1.2,
            borderRadius: "12px",
            "&:hover": { bgcolor: "primary.200" },
          } as Record<string, unknown>}
        >
          Browse Cars
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: { xs: 180, md: 320 },
          borderRadius: "24px",
          background: "linear-gradient(160deg, #1A37A7 0%, #040815 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(10, 25, 111, 0.2)",
        }}
      >
        <DirectionsCarFilledIcon
          sx={{
            fontSize: { xs: 120, md: 180 },
            color: "rgba(255,255,255,0.12)",
            transform: "rotate(-12deg)",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 24,
            left: 24,
            color: "primary.300",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          } as Record<string, unknown>}
        >
          360° Interactive View
        </Typography>
      </Box>
    </Box>
  );
}

export default HomeBanner;
