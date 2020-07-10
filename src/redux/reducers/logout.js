import { LOGOUT } from "../actions";

const initialState = {
  google: {},
  facebook: {},
};

export default (state = initialState, { type }) => {
  switch (type) {
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
