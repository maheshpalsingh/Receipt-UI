import React from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/Home';

const Tab = createMaterialTopTabNavigator();
const Toptab = () => {
  return (
    <>
      <View style={{margin: 5}}>
        <TextInput placeholder="Search" style={{borderWidth: 0.8}} />
      </View>
      <Tab.Navigator
        style={{flex: 1, marginTop: 80, backgroundColor: '#00fa9a'}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: '600'},
          tabBarItemStyle: {width: 100},
          tabBarStyle: {backgroundColor: '#98fb98'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen name="All" component={HomeScreen} />
        <Tab.Screen name="Italian" component={HomeScreen} />
        <Tab.Screen name="Quick & Easy" component={HomeScreen} />
        <Tab.Screen name="Hamburgers" component={HomeScreen} />
        <Tab.Screen name="German" component={HomeScreen} />
        <Tab.Screen name="Light & Lovely" component={HomeScreen} />
        <Tab.Screen name="Summer" component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default Toptab;
