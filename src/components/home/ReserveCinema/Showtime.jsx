import React from "react";
import { NavLink } from "react-router-dom";

function Showtime() {
  const { showTime } = this.props;
  // const { lstLichChieuTheoPhim } = item;
  return showTime.map((time, index) => {
    return (
      <NavLink key={index} className="linkBook">
        {time.ngayChieuGioChieu}
      </NavLink>
    );
  });
}

export default Showtime;
