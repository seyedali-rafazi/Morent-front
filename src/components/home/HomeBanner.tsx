import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

const BannerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  margin: "0 auto",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    marginTop: theme.spacing(4),
  },
}));

const PrimaryCard = styled("div")(({ theme }) => ({
  flex: 1,
  minHeight: 220,
  borderRadius: "24px",
  background: "linear-gradient(135deg, #3563E9 0%, #0A196F 100%)",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(53, 99, 233, 0.25)",
  [theme.breakpoints.up("md")]: {
    minHeight: 320,
    padding: theme.spacing(5),
  },
}));

const CardGlow = styled("div")({
  position: "absolute",
  right: -40,
  bottom: -40,
  width: 200,
  height: 200,
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.08)",
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: theme.spacing(2),
  maxWidth: 420,
  [theme.breakpoints.up("md")]: {
    fontSize: "42px",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[300],
  fontSize: "14px",
  marginBottom: theme.spacing(3),
  maxWidth: 380,
  lineHeight: 1.6,
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));


const SecondaryCard = styled("div")(({ theme }) => ({
  flex: 1,
  minHeight: 180,
  borderRadius: "24px",
  background: "linear-gradient(160deg, #1A37A7 0%, #040815 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(10, 25, 111, 0.2)",
  [theme.breakpoints.up("md")]: {
    minHeight: 320,
  },
}));

const CarIcon = styled(DirectionsCarFilledIcon)(({ theme }) => ({
  fontSize: 120,
  color: "rgba(255,255,255,0.12)",
  transform: "rotate(-12deg)",
  [theme.breakpoints.up("md")]: {
    fontSize: 180,
  },
}));

const SecondaryLabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: 24,
  left: 24,
  color: theme.palette.primary[300],
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
}));

function HomeBanner() {
  return (
    <BannerRoot>
      <PrimaryCard>
        <CardGlow />
        <HeroTitle>Find, book and rent a car easily</HeroTitle>
        <HeroSubtitle>
          Discover premium vehicles with 360° views. Filter by type, capacity, and price — all in your browser.
        </HeroSubtitle>
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
          }}
        >
          Browse Cars
        </Button>
      </PrimaryCard>

      <SecondaryCard>
        <CarIcon />
        <SecondaryLabel>360° Interactive View</SecondaryLabel>
      </SecondaryCard>
    </BannerRoot>
  );
}

export default HomeBanner;
