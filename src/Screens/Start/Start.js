import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Start = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        style={[StyleSheet.absoluteFill, {width: '100%'}]}
        source={require('./../../Assets/Main/Background.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
          marginHorizontal: 50,
          justifyContent: 'center',
          top: 100,
        }}>
        {/* <Image
          style={[StyleSheet.absoluteFill, {width: '100%', top: 20}]}
          source={require('./../../Assets/Main/Label.png')}
        /> */}
        <Icon
          name="star"
          color="white"
          size={16}
          style={{marginTop: 3, marginRight: 10}}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: 'white',
            fontWeight: '700',
            fontSize: 18,
          }}>
          60k+
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: 'white',
            fontWeight: '400',
            fontSize: 18,
          }}>
          {'  '}
          Premium recipes
        </Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}>
          <Image
            style={[StyleSheet.absoluteFill, {left: 90, top: 345}]}
            source={require('./../../Assets/Main/Content.png')}
          />
        </TouchableOpacity>

        {/* <Text
          style={{
            color: 'white',
            fontSize: 45,
            fontWeight: '700',
          }}>
          Lets
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 35,
          }}>
          Cooking
        </Text>
        <Text>Lets</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Start;
