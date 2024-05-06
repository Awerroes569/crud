//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = (state, postId) => {
  return state.posts.find(post => post.id === postId);
};

// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const REMOVE_POST_BY_ID = createActionName('REMOVE_POST_BY_ID');


// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST_BY_ID:
        return statePart.filter(item => item.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;