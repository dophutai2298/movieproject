import { createAction } from ".";
import { bookingService } from "../../services";

import {
  ADD_FOOD,
  AMOUNT_MONEY,
  DELETE_FOOD,
  FETCH_FOOD,
  FETCH_TICKET_ROOM,
  FETCH_TICKET_ROOM_CHAIR,
  OPTIONAL_QUANTITY,
} from "../types/types";
import { startLoading, stopLoading } from "./common.action";

export const fetchTicketRoom = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    bookingService
      .fetchTicketRoom(maLichChieu)
      .then((res) => {
        dispatch(createAction(FETCH_TICKET_ROOM, res.data.danhSachGhe));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const fetchTicketRoomChair = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    bookingService
      .fetchTicketRoom(maLichChieu)
      .then((res) => {
        dispatch(createAction(FETCH_TICKET_ROOM_CHAIR, res.data.thongTinPhim));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

//Lấy danh sách đồ ăn
export const fetchFood = () => {
  return (dispatch) => {
    bookingService
      .fetchFood()
      .then((res) => {
        dispatch(createAction(FETCH_FOOD, res.data));
      })
      .catch((err) => console.log(err));
  };
};

//Thêm đồ ăn
export const addFood = (product) => {
  const foodCart = {
    id: product.id,
    hinhAnh: product.hinhAnh,
    tenDoAn: product.tenDoAn,
    gia: product.gia,
    soLuong: 1,
  };
  return (dispatch) => {
    dispatch(createAction(ADD_FOOD, foodCart));
  };
};

//Xóa đồ ăn
export const deleteFood = (product) => {
  return (dispatch) => {
    dispatch(createAction(DELETE_FOOD, product));
  };
};

export const optionalQuantity = (product, status) => {
  return (dispatch) => {
    dispatch(createAction(OPTIONAL_QUANTITY, { product, status }));
  };
};

export const amountMoney = (money) => {
  return (dispatch) => {
    dispatch(createAction(AMOUNT_MONEY, money));
  };
};
