import {
  FETCH_FILM,
  FETCH_FILM_DETAIL,
  FETCH_FILM_FOLLOW_DAY,
} from "../types/types";

let initialState = {
  movieList: [],
  movieNew: [],
  movieDetail: null,
};

const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM: {
      state.movieList = action.payload;
      return { ...state };
    }
    case FETCH_FILM_FOLLOW_DAY: {
      state.movieNew = action.payload;
      return { ...state };
    }
    case FETCH_FILM_DETAIL: {
      state.movieDetail = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default FilmReducer;
