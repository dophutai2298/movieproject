import React, { Component } from "react";

class FilmReserve extends Component {
  render() {
    return (
      <div className="cinema__section--film">
        <div className="cinema__film--detail film__cgv">
          <div className="cinema__film--img">
            <a href>
              <img src="./images/film1.png" alt />
            </a>
          </div>
          <div className="cinema__film--book">
            <div className="film--title">
              <span className="film--age">C18</span>
              <span className="film--name">CÁ SẤU TỬ THẦN</span>
              <p className="film--time">110 phút </p>
              <p className="film-type">2D Digital</p>
            </div>
            <div className="film--reserve">
              <a href>14:20 PM</a>
              <a href>17:00 PM</a>
              <a href>19:30 PM</a>
            </div>
          </div>
        </div>
        <div className="cinema__film--detail film__cgv">
          <div className="cinema__film--img">
            <a href>
              <img src="./images/film5.png" alt />
            </a>
          </div>
          <div className="cinema__film--book">
            <div className="film--title">
              <span className="film--age">C18</span>
              <span className="film--name">KẺ CUỒNG SÁT</span>
              <p className="film--time">120 phút </p>
              <p className="film-type">2D Digital</p>
            </div>
            <div className="film--reserve">
              <a href>8:20 AM</a>
              <a href>12:00 PM</a>
              <a href>15:30 PM</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmReserve;
