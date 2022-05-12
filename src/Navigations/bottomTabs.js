import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/Home';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';
import SaveScreen from '../Screens/Save';
import Home from '../Screens/Home/Home';
import {Image, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#e23e3e"
      inactiveColor="grey"
      style={{borderRadius: 15}}
      barStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        left: 15,
        borderRadius: 20,
        right: 20,

        shadowColor: 'black',
        elevation: 25,
        height: 90,
        backgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={25} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Save"
        component={SaveScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="bookmark" color={color} size={25} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="notifications" color={color} size={25} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="person" color={color} size={25} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
