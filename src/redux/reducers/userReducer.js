const { SIGN_IN } = require("../types/types");

let initialState = {
  credentials: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      state.credentials = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default UserReducer;
