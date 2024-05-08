import { Box, Button, Grid, Typography } from "@mui/material";
import CarInformation from "./CarInformation";
import LikeCars from "./LikeCars";
import { useNavigate } from "react-router-dom";
import CarPrice from "./CarPrice";
import OrderBuuton from "./Buuton";
import CarCardContent from "./CarCardContent";

function CarCard({ products, lgCount }) {
  return products.map((car) => (
    <Grid item xs={12} md={6} lg={Number(lgCount)} key={car._id}>
      <CarCardContent car={car} />
    </Grid>
  ));
}

export default CarCard;
