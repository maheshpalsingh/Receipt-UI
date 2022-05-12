import FavItem from '../../Components/fav-item';

import {GET_MEALS, ADD_FAVORITE} from '../actions/meals';

const initialState = {
  availableMeals: [],
  favorites: [],
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
      console.log('2', addedProduct);
      return {
        ...state,
        items: {...state.favorites, [addedProduct._id]: addfav},
      };
  }
  return state;
};
