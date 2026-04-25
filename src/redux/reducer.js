import { ACTION_TYPES } from "./constants";
const contacts = [];

const contactReducer = (state = contacts, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default contactReducer;
