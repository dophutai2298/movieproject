import React, { Component } from "react";
import NewsFilm from "./NewsFilm";
import NewsKhuyenMai from "./NewsKhuyenMai";

class News extends Component {
  render() {
    return (
      <section className="container" id="tintuc">
        <div className="news__section">
          <div className="news__section--title">
            <span data-filter=".dienanh" className="active">
              Điện Ảnh
            </span>
            <span data-filter=".deal">Khuyến mãi</span>
          </div>
          <div className="news__section--content">
            {/* Điện ảnh */}
            <div className="news__content--detail mix dienanh">
              <NewsFilm />
            </div>
            {/* Review */}
            {/* Khuyến mãi */}
            <div className="news__content--detail mix deal"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
