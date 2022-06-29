import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL} from '../../Store/actions/meals';
import {removeToken} from '../../Store/actions/meals';
const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userActions from '../../Store/actions/user';
import Icon from 'react-native-vector-icons/Ionicons';
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const mydetails = useSelector(state => state.users.mydetails);
  let token = useSelector(state => state.meals.token);
  // console.log(mydetails.image);
  useEffect(() => {
    const loadMe = async () => {
      await dispatch(userActions.GetUsersAction());
    };
    loadMe();
  }, [dispatch, mydetails]);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const logout = () => {
    fetch(`${URL}/users/logout`, config)
      .then(async () => {
        console.log('Thnk');
        dispatch(removeToken());
        await AsyncStorage.removeItem('token');
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          //flex: 1,
          elevation: 5,
          height: '80%',
          borderRadius: 50,
        }}>
        <Image
          source={require('./../../Assets/Main/r2.png')}
          style={[
            StyleSheet.absoluteFillObject,
            {width: '100%', height: '40%', borderRadius: 50},
          ]}
        />
        <TouchableOpacity
          // onPress={logout}
          style={{
            backgroundColor: 'white',
            top: 20,
            left: 300,
            elevation: 5,
            height: '6%',
            width: '10%',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="pencil"
            size={25}
            style={{
              left: 2,
            }}
            color="#e23e3e"
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#fff',
            width: '50%',
            top: 100,
            elevation: 10,
            left: 100,
            height: '30%',
            borderRadius: 80,
            borderWidth: 5,
            borderColor: '#fff',
          }}>
          <Image
            source={{
              uri: 'https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg',
              //uri: mydetails.image,
            }}
            // style={StyleSheet.absoluteFillObject}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 80,
            }}
          />
        </View>
        <View
          style={{
            top: 110,
            left: '10%',
            // backgroundColor: 'black',
            borderBottomWidth: 3,
            borderColor: '#e23e3e',
            width: '80%',
            paddingBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#1E1D1D',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'left',
            }}>
            {/* Ndife Samuel */}
            {mydetails.name}
          </Text>
        </View>
        <View
          style={{
            top: 120,
            left: '20%',
            alignItems: 'center',
            paddingTop: 10,
            width: '60%',

            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: '#1E1D1D',
              fontSize: 15,
              fontWeight: '600',
              opacity: 0.7,
            }}>
            {mydetails.aboutme}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: 160,
            //left: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Main/i1.png')}
            style={{width: '10%', marginRight: 15}}
          />

          <Image
            source={require('../../Assets/Main/t1.png')}
            style={{width: '8%', marginRight: 15}}
          />
          <Image
            source={require('../../Assets/Main/f1.png')}
            style={{width: '8%', marginRight: 15, top: -1}}
          />
        </View>
        <TouchableOpacity
          onPress={logout}
          style={{
            backgroundColor: 'white',
            top: 230,
            left: 250,
            elevation: 5,
            height: '6%',
            width: '25%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text>Logout</Text>
          <Icon
            name="log-out"
            size={25}
            style={{
              left: 2,
            }}
            color="#e23e3e"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
