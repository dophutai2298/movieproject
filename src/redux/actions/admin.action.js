import { createAction } from ".";
import { adminService } from "../../services";
import {
  ADD_USER,
  DELETE_USER,
  FETCH_USER,
  GIVE_INFO_USER,
  SEARCH_USER,
  UPDATE_NOTIFY,
  UPDATE_USER,
} from "../types/types";
import { startLoading, stopLoading } from "./common.action";
import Swal from "sweetalert2";

export const fetchUserPage = (page) => {
  return (dispatch) => {
    // dispatch(startLoading());
    adminService
      .fetchUserPage(page)
      .then((res) => {
        dispatch(createAction(FETCH_USER, res.data));
        // dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        // dispatch(stopLoading());
      });
  };
};
// fetchUserPage
export const giveInfoUser = (user) => {
  return (dispatch) => {
    adminService
      .giveInfoUser(user)
      .then((res) => {
        dispatch(createAction(GIVE_INFO_USER, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchUser = (keyword) => {
  return (dispatch) => {
    adminService
      .searchUser(keyword)
      .then((res) => {
        dispatch(createAction(SEARCH_USER, res.data));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Không tìm thấy !!",
        });
      });
  };
};

export const addUser = (data, page) => {
  console.log(data);
  return (dispatch) => {
    //dispatch(startLoading());
    adminService
      .addUser(data)
      .then((res) => {
        dispatch(createAction(ADD_USER, res.data));
        dispatch(fetchUserPage(page));
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
        });
      })
      .catch((err) => {
        console.log(err.data);
        //   dispatch(stopLoading());
        Swal.fire({
          icon: "error",
          title: "Lỗi!! Không thành công ",
        });
      });
  };
};

export const updateUser = (data, page) => {
  return (dispatch) => {
    dispatch(startLoading());
    adminService
      .updateUser(data)
      .then((res) => {
        dispatch(createAction(UPDATE_USER, res.data));
        dispatch(fetchUserPage(page));
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Không thành công ",
        });
        dispatch(stopLoading());
      });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    Swal.fire({
      title: "Bạn muốn xóa ?",
      text: "Khi tài khoản bị xóa sẽ không phục hồi lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý !",
    })
      .then((result) => {
        if (result.isConfirmed) {
          adminService.deleteUser(user).then((res) => {
            dispatch(createAction(DELETE_USER, res.data));
          });
          Swal.fire("Tài khoản đã bị xóa!", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Lỗi !!! Không thành công",
          text: "Tài khoản này đã mua vé",
        });
      });
  };
};

export const resetNotify = () => {
  return (dispatch) => {
    dispatch(createAction(UPDATE_NOTIFY));
  };
};