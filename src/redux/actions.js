import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";

export const addContact = (name, number) => {
  return {
    type: ACTION_TYPES.add,
    payload: {
      name: name,
      number: number,
      id: nanoid()
    },
  };
};

export const removeContact = (id) => {
  return {
    type: ACTION_TYPES.remove,
    payload: id
  };
};


export const findContact = name => {
  return {
    type: ACTION_TYPES.find,
    payload: name
  }
}
