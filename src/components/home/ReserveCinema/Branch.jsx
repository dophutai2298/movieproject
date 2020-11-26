import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchCinemaInfoInSystem,
  fetchFilmFollowCinema,
} from "../../../redux/actions/cinema.action";

function Branch(props) {
  const { cinema } = props;

  const dispatch = useDispatch();

  // const handleChange = (e, id) => {
  //   // let idCinemaNew = {
  //   //   ...idCinema,
  //   // };

  //   dispatch(fetchCinemaInfoInSystem(id));
  // };

  return (
    <div className="cinema__section--logo active">
      <button
        onClick={() => {
          dispatch(fetchCinemaInfoInSystem(`${cinema.maHeThongRap}`));
          dispatch(fetchFilmFollowCinema(`${cinema.maHeThongRap}`));
          // console.log(`${cinema.maHeThongRap}`);
          //handleChange(cinemaInfo.maHeThongRap);
          // console.log(handleChange(cinemaInfo.maHeThongRap));
        }}
      >
        <img src={cinema.logo} alt />
      </button>
    </div>
  );
}

export default Branch;
