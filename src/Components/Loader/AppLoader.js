import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={[styles.container]}>
      <LottieView
        source={require('./../../Assets/Loader/99589-loader-for-web.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default Loader;
