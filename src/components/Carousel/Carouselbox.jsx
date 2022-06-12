import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './carousel.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderOne from '../../images/First_images.svg'

import { Navigation, Pagination,Autoplay } from "swiper";

export default function Carouselbox() { 
  return (
    <>
      <Swiper 
        pagination={true}  
        navigation={true} 
        modules={[Navigation,Pagination, Autoplay]} 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper slider">
        <SwiperSlide className="slider1">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p>помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne}/>
        </SwiperSlide>
        <SwiperSlide className="slider2">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p>помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne} />
        </SwiperSlide>
        <SwiperSlide className="slider1">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p>помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
