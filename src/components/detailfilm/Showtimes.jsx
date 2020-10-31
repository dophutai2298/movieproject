import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFilmDetail } from "../../redux/actions/film.action";

class Showtimes extends Component {
  render() {
    const { movieDetail } = this.props;
    return (
      <div className="introduce__title1__content">
        <div id="showtimes" className="showtimes">
          <div className="showtimes__left">
            <div className="showtimes__left__logo">
              <div className="showtimes__left__logo--imges">
                <img src="./images/branch2.png" alt />
              </div>
              <div className="showtimes__left__logo--title">
                <h4>BHD Star Cineplex</h4>
              </div>
            </div>
          </div>
          <div className="showtimes__right">
            <div className="scroll1">
              <div className="showtimes__right__date">
                <div className="showtimes__right__date--scroll1 ">
                  <button>
                    <p>Thứ 7</p>
                    <p>30/10</p>
                  </button>
                </div>
                <div className="showtimes__right__date--scroll1 ">
                  <button>
                    <p>Thứ 7</p>
                    <p>30/10</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showtimes__right__content">
              <div className="scroll3">
                <div className="index">
                  <div className="showtimes__right__content--address">
                    <div className="showtimes__right__content--address--imges">
                      <img
                        src="./images/bhd-star-vincom-thao-dien-15379553942188.jpg"
                        alt
                      />
                    </div>
                    <div className="showtimes__right__content--address--title">
                      <span>BHD Star</span>
                      <span>- Bitexco</span>
                      <p>
                        BHD Star - BitexcoL3-Bitexco Icon 68, 2 Hải Triều, Q.1{" "}
                      </p>
                    </div>
                  </div>
                  <h4>2D Digital</h4>
                  <div className="showtimes__right__content--time">
                    <a className="btn btn-outline-light time1">
                      <span>20:05</span>
                      <span>~ 22:05</span>
                    </a>
                    <a className="btn btn-outline-light time2">
                      <span>20:05</span>
                      <span>~ 22:05</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // this.props.dispatch(fetchFilmDetail());
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.filmReducer.movieDetail || {
      lichChieu: {
        thongTinRap: {
          maRap: "",
          tenRap: "",
          maCumRap: "",
          tenCumRap: "",
          maHeThongRap: "",
          tenHeThongRap: "",
        },
        maLichChieu: "",
        maRap: "",
        maPhim: "",
        tenPhim: "",
        ngayChieuGioChieu: "",
        giaVe: "",
        thoiLuong: "",
      },
    },
  };
};

export default connect(mapStateToProps)(Showtimes);
