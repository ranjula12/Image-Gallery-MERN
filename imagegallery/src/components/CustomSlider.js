import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//this style is for custom slider container
const styles = {
  container: {
    maxWidth: "124rem",
    padding: "4rem 1rem",
    margin: "0 auto",
  },
  heading: {
    padding: "1rem 0",
    fontSize: "3.5rem",
    textAlign: "center",
  },
  swiperContainer: {
    height: "52rem",
    padding: "2rem 0",
    position: "relative",
  },
  swiperSlide: {
    width: "37rem",
    height: "42rem",
    position: "relative",
    borderRadius: "2rem",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "2rem",
  },
  deleteButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "2.5rem",
  },
  sliderControler: {
    position: "relative",
    bottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderArrow: {
    background: "#ffffff",
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    filter: "drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
  },
  prevArrow: {
    left: "0.5rem",
  },
  nextArrow: {
    right: "0.5rem",
  },
  ionIcon: {
    fontSize: "2rem",
    color: "#222224",
  },
  pagination: {
    position: "relative",
    width: "15rem",
    bottom: "1rem",
  },
  bullet: {
    filter: "drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1))",
  },
  bulletActive: {
    background: "#6a59ff",
  },
  "@media (maxWidth: 500px)": {
    swiperContainer: {
      height: "47rem",
    },
    swiperSlide: {
      width: "28rem !important",
      height: "36rem !important",
    },
    img: {
      width: "28rem !important",
      height: "36rem !important",
    },
  },
  "@media (maxWidth: 990px)": {
    nextArrow: {
      left: "70% !important",
      transform: "translateX(-70%) !important",
    },
    prevArrow: {
      left: "30% !important",
      transform: "translateX(-30%) !important",
    },
  },
  "@media (maxWidth: 450px)": {
    nextArrow: {
      left: "80% !important",
      transform: "translateX(-80%) !important",
    },
    prevArrow: {
      left: "20% !important",
      transform: "translateX(-20%) !important",
    },
  },
};

function CustomSL({ slides, onDelete }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Image Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        style={styles.swiperContainer}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} style={styles.swiperSlide}>
            <img src={image.image} alt="slide_image" style={styles.img} />
            <button
              style={styles.deleteButton}
              onClick={() => onDelete(image._id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </SwiperSlide>
        ))}

        <div style={styles.sliderControler}>
          <div
            className="custom-swiper-button-prev"
            style={{ ...styles.sliderArrow, ...styles.prevArrow }}
          >
            <ion-icon
              name="arrow-back-outline"
              style={styles.ionIcon}
            ></ion-icon>
          </div>
          <div
            className="custom-swiper-button-next"
            style={{ ...styles.sliderArrow, ...styles.nextArrow }}
          >
            <ion-icon
              name="arrow-forward-outline"
              style={styles.ionIcon}
            ></ion-icon>
          </div>
          <div className="swiper-pagination" style={styles.pagination}></div>
        </div>
      </Swiper>
    </div>
  );
}

export default CustomSL;
