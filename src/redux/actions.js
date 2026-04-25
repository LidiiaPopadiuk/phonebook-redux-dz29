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
