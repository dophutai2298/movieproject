import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SearchCombobox from "./SearchCombobox";
import TransitionsModal from "./Modal";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
class Carousel extends Component {
  render() {
    return (
      <section className="carousel__section" id="carousel">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="./images/slider1.jpg" alt="" />

                  <TransitionsModal />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="./images/slider2.jpg" alt="" />
                  <TransitionsModal />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="./images/slider3.png" alt="" />
                  <TransitionsModal />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SearchCombobox />
      </section>
    );
  }
}

export default Carousel;
