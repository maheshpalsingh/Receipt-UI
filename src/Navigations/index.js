import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Homestack from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
const AppLoader = () => {
  return (
    <NavigationContainer>
      <Homestack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppLoader;
