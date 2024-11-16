import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.png";
import "./Carousel.css";

// Import Swiper modules from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { linearGradient } from "framer-motion/client";

const Carousel = () => {
  const images = [banner1, banner2, banner3, banner4];

  return (
    <div
      style={{
        width: "100%",
        margin: "10px auto", // Center the slider horizontally
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "fill", // Ensures the image fills the slider without distortion
                  borderRadius: "8px",
                  // please work! 🥺🥺
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "250px",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), #f141414)",
                  borderRadius: "8px", // Match the image border radius
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
