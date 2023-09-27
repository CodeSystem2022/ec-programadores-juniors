import { GET_USERS } from "./action-types";

const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
