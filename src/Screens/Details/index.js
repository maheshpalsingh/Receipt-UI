import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

const Details = props => {
  const navigation = useNavigation();
  const {meals} = props.route.params;

  let complexity, height;
  if (meals.complexity === 'simple') {
    complexity = require('../../Assets/LottieView/9879-smiley-emoji.json');
    height = '100%';
  } else if (meals.complexity === 'medium') {
    complexity = require('../../Assets/LottieView/82400-meh-emoji.json');
    height = '95%';
  } else {
    complexity = require('../../Assets/LottieView/78057-emoji-head-explosion.json');
    height = '100%';
  }

  return (
    <View style={{flex: 1}}>
      <View style={{height: '25%'}}>
        <Image
          source={{uri: meals.image}}
          style={{height: '120%', width: '100%'}}
        />
        <Icon
          name="md-arrow-back-sharp"
          size={40}
          color="white"
          style={[
            StyleSheet.absoluteFillObject,
            {marginTop: 20, marginLeft: 10},
          ]}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <ScrollView style={styles.screen}>
        <View style={styles.title}>
          <Text style={styles.titletext}>{meals.title}</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.time}>
            {/* <Icon name="alarm" size={40} color="#03c03c" /> */}
            <LottieView
              autoPlay
              loop
              source={require('./../../Assets/LottieView/lf30_editor_kcxwkcps.json')}
              style={{width: '100%', height: '120%', left: -5}}
            />
            <Text
              style={{
                color: '#03c03c',
                fontSize: 15,
                fontWeight: '600',
                paddingBottom: 10,
              }}>
              {meals.duration} MIN
            </Text>
          </View>
          <View style={styles.complex}>
            <LottieView
              autoPlay
              loop
              source={complexity}
              style={{width: '60%', height: height}}
            />
            <Text
              style={{
                color: '#E89611',
                bottom: -5,
                fontWeight: '700',
              }}>
              {meals.complexity.toUpperCase()}
            </Text>
          </View>
          <View style={styles.time3}>
            <LottieView
              autoPlay
              loop
              source={require('./../../Assets/LottieView/lf30_editor_nvmlzkze.json')}
              style={{width: '80%', height: '110%', paddingTop: 30, left: 5}}
            />
            <Text
              style={{
                color: 'blue',
                fontSize: 15,
                fontWeight: '600',
              }}>
              {meals.steps.length} STEPS
            </Text>
          </View>
        </View>
        <View style={[styles.title, {marginVertical: 10}]}>
          <Text style={styles.titletext}>Ingredients :</Text>
          {meals.ingredients.map((name, i) => {
            return (
              <View key={name} style={{flex: 1}}>
                <Text
                  style={{
                    flex: 1,
                    padding: 5,
                    width: '100%',
                    height: '50%',
                    opacity: 0.8,
                    color: 'black',
                    fontSize: 14,
                  }}>
                  🟡 {meals.steps[i]}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={[styles.title, {marginVertical: 10}]}>
          <Text style={styles.titletext}>Directions :</Text>
          {meals.steps.map((name, i) => {
            return (
              <View key={name} style={{flex: 1}}>
                <Text style={styles.text1}>
                  {i + 1}. {meals.steps[i]}
                </Text>
              </View>
            );
          })}
        </View>
        {/* <View style={[styles.title, {marginVertical: 10, bottom: 20}]}>
          <Text style={styles.titletext}>Filters :</Text>
          <Text style={styles.text1}>
            1, IsLactoseFree:-{meals.isLactoseFree.toUpperCase()}
          </Text>
          <Text style={styles.text1}>
            2, IsGlutenFree:-{meals.isGlutenFree.toUpperCase()}
          </Text>
          <Text style={styles.text1}>
            3, IsVegan:-{meals.isVegan.toUpperCase()}
          </Text>
          <Text style={styles.text1}>
            4, IsVegetarian:-{meals.isVegetarian.toUpperCase()}
          </Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    padding: 30,
  },
  title: {
    flex: 1,
    height: '15%',
  },
  titletext: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  time: {
    flex: 1,
    backgroundColor: '#8fff9f',
    padding: 20,
    marginLeft: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  complex: {
    flex: 1,
    backgroundColor: '#E89611' + 60,
    padding: 20,
    marginLeft: 10,
    borderRadius: 15,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  time3: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginLeft: 10,
    borderRadius: 15,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  text1: {
    flex: 1,
    padding: 5,
    height: '50%',
    width: '100%',
    color: 'black',
    opacity: 0.8,
    fontSize: 16,
  },
});

export default Details;
