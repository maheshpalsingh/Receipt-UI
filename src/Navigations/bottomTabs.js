import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/Home';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';
import SaveScreen from '../Screens/Save';
import Home from '../Screens/Home/Home';
import {Image, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../Screens/Profile/Profile';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#e23e3e"
      inactiveColor="grey"
      barStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 25,
        padding: 8,
        marginHorizontal: 20,
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
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="person" color={color} size={25} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
