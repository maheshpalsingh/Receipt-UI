import React from 'react';
import {View, StyleSheet} from 'react-native';
import StartScreen from '../Screens/Start';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toptab from './TopTab';
import HomeScreen from '../Screens/Home';
import Details from '../Screens/Details';
import Filter from '../Screens/Filter.js';
import Start from '../Screens/Start/Start';
import {Tabs} from './bottomTabs';
const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="BottomTabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start"
        component={Start}
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
