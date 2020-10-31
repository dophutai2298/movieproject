import { MovieFilter } from "@material-ui/icons";
import React, { Component } from "react";
import TransitionsModal from "./TrailerModal";
import { NavLink } from "react-router-dom";

class FilmItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="item">
        <div className="item__img">
          <img src={movie.hinhAnh} alt="hinhAnh" />
          <div className="item__img--range">
            <span className="item__img--point">
              <p>{movie.danhGia}</p>
              <p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </p>
            </span>
          </div>
          {/* <button className="img--play">
            <i className="fa fa-play" />
          </button> */}
          <TransitionsModal movie={movie} />
        </div>
        <div className="item__title">
          <span className="item__title--age">C18</span>
          <span className="item__title--name">{movie.tenPhim}</span>
          {/* <p className="item__title--time">150 phút</p> */}
          <div className="showHover">
            <NavLink exact to={`/detail/${movie.maPhim}`}>
              <button className="showHover--btn">Mua vé</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmItem;
