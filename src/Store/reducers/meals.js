import FavItem from '../../Components/fav-item';

import {
  GET_MEALS,
  ADD_FAVORITE,
  SET_TOKEN,
  REMOVE_TOKEN,
} from '../actions/meals';

const initialState = {
  availableMeals: [],
  favorites: [],
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        availableMeals: action.payload,
      };
    case ADD_FAVORITE:
      const addedProduct = action.meal;
      const title = addedProduct.title;
      const image = addedProduct.image;
      let addfav = new FavItem(title, image);
      console.log('Meal', addedProduct);
      return {
        ...state,
        items: {...state.favorites, [addedProduct]: addfav},
      };
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }
  }
  return state;
};
