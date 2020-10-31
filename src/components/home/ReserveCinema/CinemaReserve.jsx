import React, { Component } from "react";

class CinemaReserve extends Component {
  render() {
    return (
      <div className="cinema__section--rap">
        {/* cgv */}
        <div className="cinema__rap--detail active cinema__cgv">
          <div className="cinema__rap--img">
            <img src="./images/b1_rap1.jpg" alt />
          </div>
          <div className="cimena__rap--titile">
            <p>
              <span>CGV</span> - Pandora City
            </p>
            <p>Lầu 3, Pandora City Trường Chinh Quận Tân Phú</p>
            <a href="#">
              <i className="fas fa-pencil-alt" />
              Chi tiết
            </a>
          </div>
        </div>
        <div className="cinema__rap--detail cinema__cgv">
          <div className="cinema__rap--img">
            <img src="./images/b1_rap1.jpg" alt />
          </div>
          <div className="cimena__rap--titile">
            <p>
              <span>CGV</span> - Parkson Đồng Khởi
            </p>
            <p>Tầng 5, số 35 bis-45,Lê Thánh Tôn, P.Bến Nghé, Q.1</p>
            <a href="#">
              <i className="fa fa-pencil-alt" />
              Chi tiết
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CinemaReserve;
