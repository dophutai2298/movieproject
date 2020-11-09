import {
  FETCH_TICKET_ROOM,
  FETCH_TICKET_ROOM_CHAIR,
  SELECT_CHAIR,
} from "../types/types";

const initialState = {
  danhSachGhe: [],
  infoMovie: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKET_ROOM:
      state.danhSachGhe = action.payload;
      return { ...state };
      break;
    case FETCH_TICKET_ROOM_CHAIR:
      state.infoMovie = action.payload;
      return { ...state };
      break;
    case SELECT_CHAIR:
      console.log(action.payload);

      // tìm index vị trí của ghế trong arr danhSachGhe
      let mangUpdate = [...state.danhSachGhe];
      let index = mangUpdate.findIndex(
        (ghe) => ghe.maGhe === action.payload.maGhe
      );
      let gheCu = mangUpdate[index];
      let gheMoi = { ...gheCu, dangChon: !gheCu.dangChon };
      mangUpdate[index] = gheMoi;
      state.danhSachGhe = mangUpdate;
      return { ...state };

    default:
      return state;
  }
};

export default bookingReducer;
