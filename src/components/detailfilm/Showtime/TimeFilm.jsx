import React from "react";

export default function TimeFilm(props) {
  const { time } = props;
  const dateFormat = require("dateformat");
  //   return time.map((item, index) => {
  return (
    <a className="btn btn-outline-light time1">
      <span style={{ fontSize: "18px" }}>
        {dateFormat(time.ngayChieuGioChieu, "HH:MM")}
      </span>
    </a>
  );
  // });
}
