import { TOKEN } from "../constants/services";

const INITIAL_STATE = {
  token: "",
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default Action;
