import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Profile = () => {
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
            uri: 'https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg',
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
          Alessandra Blair
        </Text>
        <Text style={{fontSize: 19, opacity: 0.6, top: 20}}>
          Hello world i'm Alessandra Blair, I'm from Italy , i love cooking so
          much
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
