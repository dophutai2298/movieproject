const {
  FETCH_CINEMA_SYSTEM,
  FETCH_CINEMA_INFO_IN_SYSTEM,
  FETCH_FILM_FOLLOW_CINEMA,
  SELECTED_ID_CINEMA,
} = require("../types/types");

let initialState = {
  cinemaList: [], //Danh sách hệ thống rạp
  cinemaInfo: [], //Danh sách cụm rạp theo hệ thống rạp
  movieFowllowCinema: [], //Danh sách phim theo hệ thống rạp
  selectedCinema: null,
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
    case FETCH_FILM_FOLLOW_CINEMA: {
      state.movieFowllowCinema = action.payload;
      return { ...state };
    }
    case SELECTED_ID_CINEMA: {
      state.selectedCinema = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default CinemaReducer;
