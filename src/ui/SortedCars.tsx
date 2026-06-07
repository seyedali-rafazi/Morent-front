import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarCardContent from "./CarCardContent";
import useGetAllCars from "../feachers/cars/useGetAllCars";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function SortedCars() {
  const { isLoading, products } = useGetAllCars();

  return (
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
  );
}

export default SortedCars;
