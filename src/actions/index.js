import { ADD_POST } from "../constants/index";

export const addPost = post => {
  return { type: ADD_POST, post };
};
