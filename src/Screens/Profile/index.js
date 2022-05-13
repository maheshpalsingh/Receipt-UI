import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {URL} from '../../Store/actions/meals';
import {removeToken} from '../../Store/actions/meals';
const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userActions from '../../Store/actions/user';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const mydetails = useSelector(state => state.users.mydetails);
  let token = useSelector(state => state.meals.token);
  // console.log(mydetails);
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
    <View style={{padding: 20, backgroundColor: '#fff', flex: 1}}>
      <Text style={{fontSize: 22, color: 'black', fontWeight: '700'}}>
        My profile
      </Text>

      <View
        style={{
          // backgroundColor: 'red',
          width: '100%',
          flexDirection: 'row',
          top: 20,
          height: '20%',
          borderRadius: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={{
            // uri: 'https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg',
            uri: mydetails.image,
          }}
          style={{
            width: '40%',
            height: '100%',
            borderRadius: 80,
          }}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            height: '30%',
            width: '35%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#e23e3e',
            borderRadius: 10,
            right: 20,
          }}>
          <Text style={{color: '#e23e3e', fontWeight: '600', fontSize: 16}}>
            Edit profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{top: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
          {mydetails.name}
        </Text>
        <Text style={{fontSize: 19, opacity: 0.6, top: 20}}>
          {mydetails.aboutme}
        </Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'baseline', top: 100}}>
        <Button title="Logout" onPress={logout} color="#e23e3e" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
