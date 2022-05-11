import {GET_MEALS} from '../actions/meals';

const initialState = {
  availableMeals: [],
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        availableMeals: action.payload,
      };
  }
  return state;
};
