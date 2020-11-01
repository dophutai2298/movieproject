const {
  FETCH_CINEMA_SYSTEM,
  FETCH_CINEMA_INFO_IN_SYSTEM,
} = require("../types/types");

let initialState = {
  cinemaList: [],
  cinemaInfo: [],
};

const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMA_SYSTEM: {
      state.cinemaList = action.payload;
      return { ...state };
    }
    case FETCH_CINEMA_INFO_IN_SYSTEM: {
      state.cinemaInfo = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default CinemaReducer;
