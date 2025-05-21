import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import km1 from "../assets/km1.png";
import km2 from "../assets/km2.png";
import km3 from "../assets/km3.png";
import km4 from "../assets/km4.png";

const Slide3 = () => {
  const slides = [
    { id: 1, img: km1 },
    { id: 2, img: km2 },
    { id: 3, img: km3 },
    { id: 4, img: km4 },
  ];

  return (
    <div style={{ backgroundColor: '#0d1117', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="text-center font-medium	">KHUYẾN MÃI CÙNG  <span style={{ color: "rgb(43 141 254)", fontWeight: "bold" }}> RR88 </span></h1>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        onSwiper={(swiper) => {
          swiper.on('slideChange', () => {
            const slides = swiper.slides;
            slides.forEach((slide) => {
              slide.style.transform = "scale(0.85)";
            });
            if (swiper.slides[swiper.activeIndex]) {
              swiper.slides[swiper.activeIndex].style.transform = "scale(1)";
            }
          });
        }}
        onInit={(swiper) => {
          swiper.slides.forEach((slide) => {
            slide.style.transform = "scale(0.85)";
          });
          swiper.slides[swiper.activeIndex].style.transform = "scale(1)";
        }}
        style={{ width: "80%", padding: "40px 0" }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ overflow: "hidden", borderRadius: 20 }}>
              <img
                src={item.img}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide3;
