"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Button, Typography } from '@mui/material';

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <div className="max-w-4xl mb-14">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="rounded-lg shadow-lg overflow-hidden"
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#121212",
              color: "white",
              borderRadius:"8px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Share your OG Status
            </Typography>
            <Typography variant="body2" gutterBottom>
              In Telegram stories
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                marginTop: "10px",
                borderRadius: "20px",
              }}
            >
              Share
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            sx={{
              backgroundColor: "#121212",
              color: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Share your OG Status
            </Typography>
            <Typography variant="body2" gutterBottom>
              In Telegram stories
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                marginTop: "10px",
                borderRadius: "20px",
              }}
            >
              Share
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            sx={{
              backgroundColor: "#121212",
              color: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Share your OG Status
            </Typography>
            <Typography variant="body2" gutterBottom>
              In Telegram stories
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                marginTop: "10px",
                borderRadius: "20px",
              }}
            >
              Share
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
      <div className="slider_oro">
        <p className="dots"></p>
        <p className="dots"></p>
        <p className="dots"></p>
      </div>
    </div>
  );
};

export default Slider;
