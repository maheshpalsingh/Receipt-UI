import React from 'react';
import {View, StyleSheet} from 'react-native';
import StartScreen from '../Screens/Start';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toptab from './TopTab';
import HomeScreen from '../Screens/Home';
import Details from '../Screens/Details';
import Filter from '../Screens/Filter.js';
const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filters"
        component={Filter}
        options={{headerTitleAlign: 'center'}}
        //options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Homestack;
