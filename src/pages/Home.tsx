import { Box, Container } from "@mui/material";
import HomeBanner from "../components/home/HomeBanner";
import OrderInformation from "../components/home/OrderInformation";
import CarsList from "../components/home/CarsList";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        minHeight: { xs: "calc(100vh - 68px)", md: "calc(100vh - 78px)" },
        pb: "15px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          mt: { xs: 2, md: 3 },
        }}
      >
        <HomeBanner />
        <OrderInformation />
        <CarsList />
      </Container>
    </Box>
  );
}

export default Home;
