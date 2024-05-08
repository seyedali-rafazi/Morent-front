import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetAllCars from "../feachers/cars/useGetAllCars";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CarCardContent from "./CarCardContent";

function RecentCars() {
  const [carSort, setCarSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, products } = useGetAllCars();

  const handleChange = (event) => {
    let sortValue = event.target.value;
    console.log(sortValue);
    setCarSort(sortValue);
    if (sortValue == "") {
      searchParams.delete("sort", carSort);
    }
    setSearchParams({ sort: sortValue });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "secondary.200", fontSize: "15px" }}
        >
          Sorted Car
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <Select
            value={carSort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={"latest"}>latest</MenuItem>
            <MenuItem value={"earliest"}>earliest</MenuItem>
            <MenuItem value={"popular"}>popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ overflow: "auto", whiteSpace: "nowrap", width: { lg: "900px" } }}
      >
        <Box marginTop={3}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
          >
            {products.map((car) => (
              <SwiperSlide key={car._id}>
                <CarCardContent car={car} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

export default RecentCars;
