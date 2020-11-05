import React from "react";
import { NavLink } from "react-router-dom";
import Showtime from "./Showtime";

const FilmReserve = (props) => {
  const { movie } = props;
  const { danhSachPhim } = movie;
  return danhSachPhim.map((item, index) => {
    return (
      <div className="cinema__film--detail film__cgv" key={index}>
        <div className="cinema__film--img">
          <NavLink
            exact
            to={`/detail/${item.maPhim}`}
            style={{ textDecoration: "none" }}
          >
            <img style={{ height: "120px" }} src={item.hinhAnh} alt />
          </NavLink>
        </div>

        <div className="cinema__film--book">
          <div className="film--title">
            <span className="film--age">C18</span>
            <span className="film--name">{item.tenPhim}</span>
            <p className="film--time">{movie.tenCumRap}</p>
            <p className="film--time">110 phút </p>
            <p className="film-type">2D Digital</p>
          </div>
          <div className="film--reserve">
            <Showtime showTime={item.lstLichChieuTheoPhim} />
            {/* <a href="google.com" className="linkBook">
              12:00
            </a>
            <a href="google.com" className="linkBook">
              18:00
            </a> */}
          </div>
        </div>
      </div>
    );
  });
};

// const Showtime = () => {
//   const { movie } = props;
//   const { danhSachPhim } = movie;
//   return danhSachPhim.map((item, index) => {
//     let { lstLichChieuTheoPhim } = item[index];
//     return lstLichChieuTheoPhim.map((time, index) => {
//       return (
//         <NavLink key={index} className="linkBook">
//           {time.ngayChieuGioChieu}
//         </NavLink>
//       );
//     });
//   });
// };

export default FilmReserve;
