import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';
export const Category = props => {
  return (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={1}
      onPress={props.onPress}>
      <View
        style={{
          backgroundColor: '#f1f1f1',
          //backgroundColor: '#F08080',
          padding: 10,
          flex: 1,
          elevation: 3,
          borderRadius: 12,
          marginHorizontal: 10,
          marginTop: 50,
          maxWidth: 180,
        }}>
        <View
          style={{
            backgroundColor: '#f1f1f1',
            width: 130,
            height: 130,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            top: -50,
            elevation: 3,
            borderRadius: 70,
          }}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{
              borderRadius: 60,
              height: 110,
              width: 110,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            marginTop: -40,
            marginBottom: 10,
            fontSize: 18,
            color: '#181818',
            alignSelf: 'center',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{marginVertical: 5, opacity: 0.8}}></Text>
            <Text
              style={{
                color: '#181818',
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              {props.steps} Mins
            </Text>
          </View>
          <TouchableOpacity
            onPress={props.onSave}
            style={{
              backgroundColor: '#fff',
              borderRadius: 25,
              alignSelf: 'flex-end',
              padding: 5,
              elevation: 3,
              marginBottom: 5,
            }}>
            <Icons name="bookmark" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
