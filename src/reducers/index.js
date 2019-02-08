import { ADD_POST } from "../constants/index";
const initialState = {
  posts: []
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      var posts = state.posts;
      posts.push(action.post);
      return { ...state, posts };
    default:
      return state;
  }
};
