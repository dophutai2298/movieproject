import React, { useDispatch } from "react";
import { fetchFilmFollowCinema } from "../../../redux/actions/cinema.action";

function CinemaReserve(props) {
  const { cinemaInfo } = props;
  // const dispatch = useDispatch();
  return (
    <span
      onClick={() => {
        // dispatch(fetchFilmFollowCinema(`${cinemaInfo.maCumRap}`));
      }}
    >
      <div className="cinema__rap--detail ">
        <div className="cinema__rap--img">
          <img
            src="https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/large_jpg/002.jpg?1490369108"
            alt="cinema"
          />
        </div>
        <div className="cimena__rap--titile">
          <p>
            <span>{cinemaInfo.tenCumRap}</span>
          </p>
          <p>{cinemaInfo.diaChi}</p>
          {/* <a href="#">
              <i className="fas fa-pencil-alt" />
              Chi tiết
            </a> */}
        </div>
      </div>
    </span>
  );
}

export default CinemaReserve;
