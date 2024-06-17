import shortid from 'shortid';

//selectors
export const getAllCathegories = (state) => state.cathegories;


// actions
const createActionName = actionName => `app/cathegories/${actionName}`;

// action creators
const cathegoryReducer = (statePart = [], action) => {
  return statePart;
};

export default cathegoryReducer;