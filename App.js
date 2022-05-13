import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AppLoader from './src/Navigations';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import mealsReducer from './src/Store/reducers/meals';
import usersReducer from './src/Store/reducers/user';
const rootReducer = combineReducers({
  meals: mealsReducer,
  users: usersReducer,
});
const Store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={Store}>
        <AppLoader />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
