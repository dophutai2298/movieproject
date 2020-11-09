import { createAction } from ".";
import { bookingService } from "../../services";

import { FETCH_TICKET_ROOM, FETCH_TICKET_ROOM_CHAIR } from "../types/types";
import { startLoading, stopLoading } from "./common.action";

export const fetchTicketRoom = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    bookingService
      .fetchTicketRoom(maLichChieu)
      .then((res) => {
        dispatch(stopLoading());
        dispatch(createAction(FETCH_TICKET_ROOM, res.data.danhSachGhe));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchTicketRoomChair = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    bookingService
      .fetchTicketRoom(maLichChieu)
      .then((res) => {
        dispatch(stopLoading());
        dispatch(createAction(FETCH_TICKET_ROOM_CHAIR, res.data.thongTinPhim));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
