import React from "react";
import { useSelector } from "react-redux";
import TimeFilm from "./TimeFilm";

function ShowtimeFilm(props) {
  const { movieShowTime } = props;
  const dateFormat = require("dateformat");
  const id = useSelector((state) => state.cinemaReducer.selectedCinema);
  const day = useSelector((state) => state.cinemaReducer.selectedDay);
  if (id && day) {
    return movieShowTime.map((movie, index) => {
      let { maHeThongRap } = movie;
      return movie.cumRapChieu.map((item, index) => {
        const renderPhim = () => {
          return (
            <div className="showtimes__right__content--address">
              <div className="showtimes__right__content--address--imges">
                <img
                  src="https://www.timeoutdubai.com/public/images/2020/05/27/VOX-Cinemas.jpg"
                  alt
                />
              </div>
              <div className="showtimes__right__content--address--title">
                <span style={{ fontSize: "16px", textTransform: "uppercase" }}>
                  {movie.tenHeThongRap}
                </span>
                <p style={{ margin: "0" }}>{item.tenCumRap}</p>
              </div>
            </div>
          );
        };
        if (maHeThongRap === id) {
          return item.lichChieuPhim.map((time, index) => {
            let { ngayChieuGioChieu } = time;
            let formatDay = ngayChieuGioChieu.slice(0, 10);
            if (formatDay === day) {
              return (
                <div className="index" key={index}>
                  {renderPhim()}
                  <h4>2D Digital</h4>
                  <div className="showtimes__right__content--time">
                    <TimeFilm time={time} />
                  </div>
                </div>
              );
            }
          });
        }
      });
    });
  }
  return (
    <div className="error__showtime">
      <p>Vui lòng chọn thông tin !!!</p>
    </div>
  );
}

export default ShowtimeFilm;

//  if (maHeThongRap === id) {
// return movie.cumRapChieu.map((item, index) => {
//   return (
//     <div className="index">
//       <div className="showtimes__right__content--address">
//         <div className="showtimes__right__content--address--imges">
//           <img
//             src="https://www.timeoutdubai.com/public/images/2020/05/27/VOX-Cinemas.jpg"
//             alt
//           />
//         </div>
//         <div className="showtimes__right__content--address--title">
//           <span style={{ fontSize: "18px", textTransform: "uppercase" }}>
//             {movie.tenHeThongRap}
//           </span>
//           <p style={{ margin: "0" }}>{item.tenCumRap}</p>
//         </div>
//       </div>
//       <h4>2D Digital</h4>
//       <div className="showtimes__right__content--time">
//         <TimeFilm time={item.lichChieuPhim} />
//       </div>
//     </div>
//   );
// });
// }
