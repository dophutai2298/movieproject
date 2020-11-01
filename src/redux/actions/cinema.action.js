import { createAction } from ".";
import { cinemaService } from "../../services";
import {
  FETCH_CINEMA_INFO_IN_SYSTEM,
  FETCH_CINEMA_SYSTEM,
} from "../types/types";
import { startLoading, stopLoading } from "./common.action";

export const fetchCinemaSystem = () => {
  return (dispatch) => {
    dispatch(startLoading());
    cinemaService
      .fetchCinemaSystem()
      .then((res) => {
        dispatch(createAction(FETCH_CINEMA_SYSTEM, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCinemaInfoInSystem = () => {
  return (dispatch) => {
    dispatch(startLoading());
    cinemaService
      .fetchCinemaInfoInSystem()
      .then((res) => {
        dispatch(createAction(FETCH_CINEMA_INFO_IN_SYSTEM, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
