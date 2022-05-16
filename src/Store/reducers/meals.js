import {useEffect} from 'react';
import FavItem from '../../Components/fav-item';
import 'localstorage-polyfill';
import {
  GET_MEALS,
  ADD_FAVORITE,
  SET_TOKEN,
  REMOVE_TOKEN,
  REMOVE_FAVORITE,
} from '../actions/meals';

//const favfromLocalStorage = JSON.parse(localStorage.getItem('fav')) || '{}';

const initialState = {
  availableMeals: [],
  //favorites: favfromLocalStorage,
  favorites: {},
  token: null,
};

// useEffect(() => {
//   localStorage.setItem('fav', JSON.stringify(favorites));
// }, [favorites]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const addMeal = action.meal;
      const title = addMeal.title;
      const image = addMeal.image;
      const affordability = addMeal.affordability;
      const category = addMeal.category;
      const complexity = addMeal.complexity;
      const duration = addMeal.duration;
      const steps = addMeal.steps;
      const ingredients = addMeal.ingredients;

      let addfav = new FavItem(
        title,
        image,
        affordability,
        category,
        complexity,
        duration,
        steps,
        ingredients,
      );

      return {
        ...state,
        favorites: {...state.favorites, [addMeal._id]: addfav},
      };
    case REMOVE_FAVORITE:
      let updateorremoves = {...state.favorites};
      delete updateorremoves[action.meal];
      return {
        ...state,
        favorites: updateorremoves,
      };
    case GET_MEALS:
      return {
        ...state,
        availableMeals: action.payload,
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
