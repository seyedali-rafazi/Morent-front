import { Grid } from "@mui/material";
import CarCardContent from "./CarCardContent";
import type { Car } from "../types";

interface CarCardProps {
  products: Car[];
  lgCount: number;
}

function CarCard({ products, lgCount }: CarCardProps) {
  return products.map((car) => (
    <Grid item xs={12} md={6} lg={Number(lgCount)} key={car._id}>
      <CarCardContent car={car} />
    </Grid>
  ));
}

export default CarCard;
