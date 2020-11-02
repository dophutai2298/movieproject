import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SearchCombobox from "./SearchCombobox";
import TransitionsModal from "./Modal";
import { connect } from "react-redux";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
class Carousel extends PureComponent {
  renderCarousel = () => {
    const { movieList } = this.props;
    return movieList.map((movie, index) => {
      if (index < 3) {
        return (
          <SwiperSlide>
            <div className="swiper-slide">
              <img style={{ height: "700px" }} src={movie.hinhAnh} alt="" />

              <TransitionsModal movie={movie} />
            </div>
          </SwiperSlide>
        );
      }
    });
  };
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
              {this.renderCarousel()}
            </Swiper>
          </div>
        </div>
        <SearchCombobox />
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.filmReducer.movieList,
  };
};
export default connect(mapStateToProps)(Carousel);
