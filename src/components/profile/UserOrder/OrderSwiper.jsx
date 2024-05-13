import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import CarOrder from "./CarOrder";

function OrderSwiper({ products }) {
  return (
    <Box sx={{ overflow: "auto", whiteSpace: "nowrap", width: "100%" }}>
      <Box marginTop={3}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Pagination, Navigation]}
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
        >
          {products.map((car) => (
            <SwiperSlide key={car._id}>
              <CarOrder car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default OrderSwiper;
