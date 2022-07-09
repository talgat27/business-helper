import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderOne from '../../images/slider-image1.png'

import {Pagination, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper slider">
        <SwiperSlide className="slider1">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p className="small-text">помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne} />
        </SwiperSlide>
        <SwiperSlide className="slider2">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p className="small-text">помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne} />
        </SwiperSlide>
        <SwiperSlide className="slider1">
          <div className="text">
            <h1>BUSINESS HELPER</h1>
            <p className="small-text">помощник руководителя</p>
          </div>
          <img className="images" src={SliderOne} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
