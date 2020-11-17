import {
  FETCH_USER,
  ADD_USER,
  SEARCH_USER,
  DELETE_USER,
  UPDATE_NOTIFY,
} from "../types/types";

const initialState = {
  listUser: [],
  searchUser: [],
  notify: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      state.listUser = action.payload;
      return { ...state };
    }
    case ADD_USER: {
      return { ...state };
    }
    case SEARCH_USER: {
      state.searchUser = action.payload;

      return { ...state };
    }
    case DELETE_USER: {
      state.notify = action.payload;
      return { ...state };
    }
    case UPDATE_NOTIFY: {
      state.notify = "";
      return { ...state };
    }
    default:
      return state;
  }
};

export default adminReducer;
