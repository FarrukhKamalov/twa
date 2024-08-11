'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
          <h1>Share your og
             status</h1>
          <p>in telegram stories</p>
          <button><span>Share</span></button>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Share your og status</h1>
          <p>in telegram stories</p>
          <button><span>Share</span></button>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Share your og status</h1>
          <p>in telegram stories</p>
          <button><span>Share</span></button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}