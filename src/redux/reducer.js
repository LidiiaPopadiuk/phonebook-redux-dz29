import { ACTION_TYPES } from "./constants";

const initialState = {
  contacts: [],
  filter: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case ACTION_TYPES.remove:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };

    case ACTION_TYPES.find:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default contactReducer;
