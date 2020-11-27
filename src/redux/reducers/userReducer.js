const { SIGN_IN, USER__INFO_BOOKING, CHANGE__INFO } = require("../types/types");

let initialState = {
  credentials: null,
  userInfoBooking: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      state.credentials = action.payload;
      return { ...state };
    }
    case USER__INFO_BOOKING: {
      console.log("reduce", action.payload);
      state.userInfoBooking = action.payload;
      return { ...state };
    }
    case CHANGE__INFO: {
      let credentials = state.credentials;
      credentials = null;

      state.credentials = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default UserReducer;
