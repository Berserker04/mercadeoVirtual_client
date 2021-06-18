import { USER } from "../constants/user";

const INITIAL_STATE = {
  user: {},
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default Action;
