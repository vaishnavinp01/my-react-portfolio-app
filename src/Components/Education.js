import React from "react";
import { education } from "../Components/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../CSS/Education.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Education = () => {
  return (
    <section className="education" id="Education">
      <p className="education-subtitle">Education</p>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#9c89b8",
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper education-container"
      >
        <Swiper className="education-container">
          {education.map(({ name, year, university, marks }, index) => {
            return (
              <SwiperSlide className="education-card">
                <span className="education-name">{name}</span>
                <h3>{year}</h3>
                <h5>{university}</h5>
                <h5>{marks}</h5>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Swiper>
    </section>
  );
};

export default Education;
