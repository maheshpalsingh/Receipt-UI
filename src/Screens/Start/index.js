import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';

const StartScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: 'grey',
          marginTop: 50,
          margin: 20,
          borderRadius: 35,
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          autoPlay
          loop
          source={require('../../Assets/LottieView/16768-stirring-into-the-sunset.json')}
        />
      </View>

      <View
        style={{
          bottom: -40,
          marginLeft: 20,
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}>
        <Text style={{opacity: 0.7, fontWeight: '500'}}>PREMIUM RECEIPES</Text>

        <Text
          style={{
            fontSize: 50,
            fontWeight: '700',
            color: 'black',
            lineHeight: 50,
          }}>
          It's
        </Text>
        <Text
          style={{
            fontSize: 50,
            fontWeight: '700',
            color: 'black',
            lineHeight: 50,
            lineHeight: 50,
          }}>
          Cooking
        </Text>
        <Text
          style={{
            fontSize: 50,
            fontWeight: '700',
            color: 'black',
            lineHeight: 50,
          }}>
          Time!
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          paddingBottom: 40,
          paddingLeft: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0bda51',
            padding: 20,
            paddingLeft: 35,
            paddingRight: 35,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartScreen;
