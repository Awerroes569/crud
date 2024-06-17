import shortid from 'shortid';

//selectors
export const getAllCategories = (state) => state.categories;


// actions
const createActionName = actionName => `app/categories/${actionName}`;

// action creators
const categoryReducer = (statePart = [], action) => {
  return statePart;
};

export default categoryReducer;