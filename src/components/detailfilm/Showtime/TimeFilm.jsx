import React from "react";
import { NavLink } from "react-router-dom";
export default function TimeFilm(props) {
  const { time } = props;
  const dateFormat = require("dateformat");
  //   return time.map((item, index) => {
  return (
    <NavLink
      exact
      to={`/booking/${time.maLichChieu}`}
      className="btn btn-outline-light time1"
    >
      <span style={{ fontSize: "18px" }}>
        {dateFormat(time.ngayChieuGioChieu, "HH:MM")}
      </span>
    </NavLink>
  );
  // });
}
