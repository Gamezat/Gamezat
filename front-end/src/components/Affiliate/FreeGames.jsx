import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";

export default function FreeGames() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://tse2.mm.bing.net/th?id=OIP.zO-7UghHKpxtr63I53ycxAHaHa&pid=Api&P=0" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
