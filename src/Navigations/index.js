import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Homestack from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import Authtab from './authTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../Store/actions/meals';
import {useDispatch, useSelector} from 'react-redux';
import Loader from './../Components/Loader/AppLoader';

const AppLoader = () => {
  const [loggedIn, setloggedin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const token = useSelector(state => state.meals.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) setloggedin(false);
    try {
      AsyncStorage.getItem('token').then(async res => {
        if (!res) {
          setloggedin(false);
        } else {
          let token = await JSON.parse(res);
          setloggedin(true);
          dispatch(setToken(token.token));
        }
        setLoading(false);
      });
    } catch (e) {
      console.log('Error', e);
    }
  }, [token]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {loggedIn ? <Homestack /> : <Authtab />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppLoader;
