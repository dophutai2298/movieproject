import React, { Component } from "react";

class FilmReserve extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="cinema__film--detail film__cgv">
        <div className="cinema__film--img">
          <a href>
            <img src={movie.lstCumRap.danhSachPhim} alt />
          </a>
        </div>
        <div className="cinema__film--book">
          <div className="film--title">
            <span className="film--age">C18</span>
            <span className="film--name">
              {/* {movie.lstCumRap.danhSachPhim.tenPhim} */}
            </span>
            <p className="film--time">110 phút </p>
            <p className="film-type">2D Digital</p>
          </div>
          <div className="film--reserve">
            <a href>
              {/* {
                movie.lstCumRap.danhSachPhim.lstLichChieuTheoPhim
                  .ngayChieuGioChieu
              } */}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmReserve;
