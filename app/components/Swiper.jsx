import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Swiperss = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
        <SwiperSlide>
          <h1>Share your og status</h1>
          <p>in telegram stories</p>
          <button><span>Share</span></button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swiperss;
