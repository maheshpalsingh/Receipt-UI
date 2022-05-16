import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AppLoader from './src/Navigations';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import mealsReducer from './src/Store/reducers/meals';
import usersReducer from './src/Store/reducers/user';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

const rootReducer = combineReducers({
  meals: mealsReducer,
  users: usersReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));
const persister = persistStore(Store);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PersistGate loading={null} persistor={persister}>
        <Provider store={Store}>
          <AppLoader />
        </Provider>
      </PersistGate>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
