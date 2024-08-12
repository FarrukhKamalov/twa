'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <div className="max-w-4xl">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}  // Bir vaqtning o'zida ikkita slayd ko'rinadi
        centeredSlides={false}  // Slaydlar centerga joylashmasligi uchun
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="rounded-lg shadow-lg overflow-hidden"
      >
        <SwiperSlide>
          <div>
            <h1>Share your OG status</h1>
            <p>in telegram stories</p>
            <button>
              <span>Share</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Share your OG status</h1>
            <p>in telegram stories</p>
            <button>
              <span>Share</span>
            </button>
          </div>        
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Share your OG status</h1>
            <p>in telegram stories</p>
            <button>
              <span>Share</span>
            </button>
          </div>        
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Share your OG status</h1>
            <p>in telegram stories</p>
            <button>
              <span>Share</span>
            </button>
          </div>        
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
