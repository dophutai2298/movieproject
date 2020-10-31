import React, { Component } from "react";

class Information extends Component {
  render() {
    console.log(this.props);
    const { movieDetail } = this.props;
    return (
      <div className="introduce__title1__content1" id="notification">
        <div className="introduce__content1--info">
          <div className="introduce__content1--table">
            <table>
              <thead>
                <tr className="table__content">
                  <td>Ngày công chiếu</td>
                  <td>Tên phim</td>
                  <td>Bí danh</td>
                  <td>Mã nhóm</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {movieDetail.ngayKhoiChieu}</td>
                  <td>{movieDetail.tenPhim}</td>
                  <td>{movieDetail.biDanh}</td>
                  <td>{movieDetail.maNhom}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="introduce__content1--detail">
            <p>Nội dung</p>
            <p>{movieDetail.moTa}</p>
          </div>
          <div className="introduce__content1--trailer">
            <p className="content1">Trailer</p>

            <iframe
              width={600}
              height={315}
              src={movieDetail.trailer}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
