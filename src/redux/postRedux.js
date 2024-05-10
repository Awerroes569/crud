import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = (state, postId) => {
  return state.posts.find(post => post.id === postId);
};

// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const REMOVE_POST_BY_ID = createActionName('REMOVE_POST_BY_ID');
export const ADD_POST = createActionName('ADD_POST');
export const EDIT_POST = createActionName('EDIT_POST');


// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST_BY_ID:
        return statePart.filter(item => item.id !== action.payload);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      //console.log('REDUCER Editing post');
      //console.log(typeof(action.payload.id));
      //console.log('after removing',[...statePart.filter(item => item.id !== action.payload.id), { ...action.payload }]);
      //debugger;
      return [...statePart.filter(item => item.id !== action.payload.id), { ...action.payload }];
    default:
      return statePart;
  };
};

export default postsReducer;