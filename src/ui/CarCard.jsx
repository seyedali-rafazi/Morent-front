import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CarInformation from "./CarInformation";

function CarCard({ products }) {
  return products.map((car) => (
    <Grid item xs={4} sm={4} md={4} lg={3} key={car._id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          minHeight: "280px",
          bgcolor: "primary.100",
          p: "20px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: "700" }}
            >
              {car.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                color: "secondary.200",
              }}
            >
              {car.typecars}
            </Typography>
          </Box>
          <IconButton color="red">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            src={car.imageLink}
            alt={car.title}
          />
        </Box>
        <CarInformation car={car} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "600" }}>
                ${car.offPrice}/&nbsp;
              </Typography>
              <Typography
                sx={{ fontSize: "12px", mt: "3px", color: "secondary.300" }}
              >
                Day
              </Typography>
            </Box>
            {car.discount == 0 ? (
              ""
            ) : (
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "13px",
                  color: "secondary.300",
                }}
              >
                <s>${car.price}</s>
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.600",
            }}
          >
            Rent now
          </Button>
        </Box>
      </Box>
    </Grid>
  ));
}

export default CarCard;
