import {
  ADD_FOOD,
  AMOUNT_MONEY,
  DELETE_FOOD,
  FETCH_FOOD,
  FETCH_TICKET_ROOM,
  FETCH_TICKET_ROOM_CHAIR,
  OPTIONAL_QUANTITY,
  SELECT_CHAIR,
} from "../types/types";
import Swal from "sweetalert2";
const initialState = {
  danhSachGhe: [],
  infoMovie: [],
  foodList: [],
  cartFoodList: [],
  amountMoney: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKET_ROOM: {
      state.danhSachGhe = action.payload;
      return { ...state };
    }

    case FETCH_TICKET_ROOM_CHAIR: {
      state.infoMovie = action.payload;
      return { ...state };
    }

    case SELECT_CHAIR: {
      // console.log(action.payload);
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
    }

    case FETCH_FOOD: {
      state.foodList = action.payload;
      return { ...state };
    }
    case ADD_FOOD: {
      let cartFoodList = [...state.cartFoodList];
      const index = cartFoodList.findIndex((cart) => {
        return cart.id === action.payload.id;
      });

      if (index !== -1) {
        cartFoodList[index].soLuong += 1;
      } else {
        cartFoodList = [...cartFoodList, action.payload];
      }
      // cartFoodList.push(action.payload);
      state.cartFoodList = cartFoodList;
      return { ...state };
    }
    case DELETE_FOOD: {
      let cartFoodList = [...state.cartFoodList];
      cartFoodList.splice(action.index, 1);
      state.cartFoodList = cartFoodList;
      return { ...state };
    }
    case OPTIONAL_QUANTITY: {
      let cartFoodList = [...state.cartFoodList];
      const index = cartFoodList.findIndex((cart) => {
        return cart.id === action.payload.id;
      });

      if (action.payload.status) {
        action.payload.product.soLuong += 1;
      } else {
        if (action.payload.product.soLuong > 1)
          action.payload.product.soLuong -= 1;
      }
      state.cartFoodList = cartFoodList;
      return { ...state };
    }

    case AMOUNT_MONEY: {
      let renew = [];
      if (action.payload) {
        state.amountMoney = action.payload;
        state.cartFoodList = renew;
        Swal.fire({
          icon: "success",
          title: "Đã thêm vào Thanh Toán !",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Bạn chưa chọn sản phẩm",
        });
      }

      return { ...state };
    }
    default:
      return state;
  }
};

export default bookingReducer;
