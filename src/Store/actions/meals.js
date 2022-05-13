export const GET_MEALS = 'GET_MEALS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
import axios from 'axios';
export const URL = 'http://10.0.2.2:3000';

export const MealsAction = () => {
  return async (dispatch, getState) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          //Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .get(`${URL}/meals/all`, config)
        .then(response => {
          dispatch({
            type: GET_MEALS,
            payload: response?.data,
          });
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (e) {
      console.log('Error while fetching products', e);
    }
  };
};

export const addToFavorite = meal => {
  return {type: ADD_FAVORITE, meal: meal};
};

export const setToken = token => {
  return {type: SET_TOKEN, payload: token};
};
export const removeToken = () => {
  return {type: REMOVE_TOKEN};
};
