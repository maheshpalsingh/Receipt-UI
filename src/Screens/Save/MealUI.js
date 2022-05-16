import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SavedMeals = props => {
  return (
    <TouchableOpacity style={{padding: 1}} onPress={props.onPress}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,

          width: '100%',
          elevation: 5,
          height: 200,
          marginTop: 20,

          borderRadius: 12,
        }}>
        <Image
          source={{
            //uri: 'http://10.0.2.2:3000/profile/profile_16521206226771.jpg',
            uri: props.image,
          }}
          style={{
            width: '100%',
            height: '80%',
            borderRadius: 12,
          }}
        />
        <TouchableOpacity
          onPress={props.remove}
          style={{
            top: -150,
            right: -320,
            width: '10%',
            height: '18%',
            borderRadius: 50,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Icon name="bookmark" size={20} color="#e23e3e" />
        </TouchableOpacity>

        <Text
          style={{
            backgroundColor: '#fff',
            top: -25,
            fontWeight: '700',
            fontSize: 18,
            opacity: 0.8,
            color: 'black',
            left: 10,
          }}>
          {/* Spaghetti with Tomato Sauce */}
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
