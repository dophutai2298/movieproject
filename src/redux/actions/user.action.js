import { createAction } from ".";
import { adminService, userService } from "../../services";
import {
  SIGN_IN,
  SIGN_UP,
  USER__INFO_BOOKING,
  CHANGE__INFO,
} from "../types/types";
import { startLoading, stopLoading } from "./common.action";
import Swal from "sweetalert2";

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

export const registerRequest = (data, history) => {
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
        history.push("/sign-in");
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Lỗi !!",
          text: "Tài khoản hoặc Email đã tồn tại",
        });
        dispatch(stopLoading());
      });
  };
};

// lấy thông tin lịch sử người đặt vé
export const fetchInFoBooking = (user) => {
  return (dispatch) => {
    userService
      .fetchInFoBooking(user)
      .then((res) => {
        dispatch(createAction(USER__INFO_BOOKING, res.data.thongTinDatVe));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// thây đổi thông tin tài khoản

export const changeUserInFo = (user) => {
  return (dispatch) => {
    adminService
      .updateUser(user)
      .then((res) => {
        dispatch(createAction(CHANGE__INFO, res.data));
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Không thành công ",
        });
      });
  };
};
