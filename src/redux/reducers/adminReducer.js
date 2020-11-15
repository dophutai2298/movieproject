const { FETCH_USER } = require("../types/types");

const initialState = {
  listUser: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      state.listUser = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default adminReducer;
