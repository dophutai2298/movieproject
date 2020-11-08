import { createAction } from ".";
import { userService } from "../../services";
import { SIGN_IN, SIGN_UP } from "../types/types";
import { startLoading, stopLoading } from "./common.action";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export const loginRequest = (user, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(SIGN_IN, res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });

        //Lưu vào local
        localStorage.setItem("creadentials", JSON.stringify(res.data));

        history.push("/");
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Lỗi !!",
          text: "Tài khoản hoặc Mật khẩu không đúng ",
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
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công",
        });
        // history.push("/sign-in");
        dispatch(stopLoading());
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
              title: "Lỗi !!",
          text: "Tài khoản hoặc Email đã tồn tại",
        });
        dispatch(stopLoading());
      });
  };
};
