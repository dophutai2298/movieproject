import React, { Component } from "react";
import SimpleTabs from "./BookingMovieDetail";

class CarouselDetail extends Component {
  renderRating = (data) => {
    var star = [];
    for (let i = 1; i <= data; i++) {
      star += `<i class="fa fa-star"></i>`;
    }
    return star;
  };
  render() {
    const { movieDetail } = this.props;
    new Date("2016-07-25T00:00:00Z").getTime();
    //  Reverse day
    // const day = movieDetail.ngayKhoiChieu;
    // const cutString = movieDetail.day.slice(0, 10);
    // let date = new Date(cutString);
    // let dd = date.getDate();
    // let mm = date.getMonth() + 1;
    // let yy = date.getFullYear();
    // let newDay = dd + "/" + mm + "/" + yy;
    return (
      <section className="mycarousel">
        <div
          className="mycarousel__brand"
          style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
        >
          {/* <div style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}></div> */}
          {/* <img src={movieDetail.hinhAnh} alt="background" /> */}
        </div>
        <div className="mycarousel__content">
          <div className="mycarousel__content__image">
            <img src={movieDetail.hinhAnh} alt="movie" />
          </div>

          <div className="mycarousel__content__title">
            <p>{movieDetail.ngayKhoiChieu}</p>
            <label htmlFor>C16</label>
            <p className="mycarousel__content--name">{movieDetail.tenPhim}</p>
            <p>{movieDetail.lichChieu.thoiLuong}</p>
          </div>
          <div className="mycarousel__content__evaluate">
            <p>{movieDetail.danhGia}</p>
            <p className="mycarousel__evaluate--rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </p>

            {/* <p>270 người đánh giá</p> */}
          </div>
        </div>
      </section>
    );
  }
}

export default CarouselDetail;
