// 'use client';

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//       <SwiperSlide>
//           <h1>Share your og
//              status</h1>
//           <p>in telegram stories</p>
//           <button><span>Share</span></button>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h1>Share your og status</h1>
//           <p>in telegram stories</p>
//           <button><span>Share</span></button>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h1>Share your og status</h1>
//           <p>in telegram stories</p>
//           <button><span>Share</span></button>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }



"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function SliderPage() {
  return (
    <div className="container mx-auto py-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-black text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold">Share your OG Status</h2>
            <p className="mt-2">In Telegram stories</p>
            <button className="bg-white text-black px-4 py-2 mt-4 rounded-full">Share</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold">Share your OG Status</h2>
            <p className="mt-2">In Telegram stories</p>
            <button className="bg-white text-black px-4 py-2 mt-4 rounded-full">Share</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold">Share your OG Status</h2>
            <p className="mt-2">In Telegram stories</p>
            <button className="bg-white text-black px-4 py-2 mt-4 rounded-full">Share</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
