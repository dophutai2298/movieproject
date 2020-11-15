import { createAction } from ".";
import { adminService } from "../../services";
import { FETCH_USER } from "../types/types";
import { startLoading, stopLoading } from "./common.action";

export const fetchUserPage = (page) => {
  return (dispatch) => {
    dispatch(startLoading());
    adminService
      .fetchUserPage(page)
      .then((res) => {
        dispatch(createAction(FETCH_USER), res.data);
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
