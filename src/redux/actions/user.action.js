
import { createAction } from ".";
import { userService } from "../../services";
import { SIGN_IN, SIGN_UP } from "../types/types";
import { startLoading, stopLoading } from "./common.action";
import Swal from "sweetalert2";

export const loginRequest = (user) => {
  return (dispatch) => {
    dispatch(startLoading());
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(SIGN_IN, res.data));
        Swal.fire({
          icon: "success",
          title: "Login successfully",
        });

        localStorage.setItem("creadentials", JSON.stringify(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login error",
          text: "Username or Password isn't correct ",
        });
        dispatch(stopLoading());
      });
  };
};

export const registerRequest = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    userService
      .signUp(data)
      .then((res) => {
        dispatch(createAction(SIGN_UP, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
