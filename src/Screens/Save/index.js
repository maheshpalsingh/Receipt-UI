import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {SavedMeals} from './MealUI';

const SaveScreen = props => {
  const favItems = useSelector(state => {
    const transformedFav = [];
    for (const key in state.meals.favorites) {
      transformedFav.push({
        id: key,
        title: state.meals.favorites[key].title,
        image: state.meals.favorites[key].image,
      });
    }
    return transformedFav;
  });
  // console.log('Fav', favItems);
  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            opacity: 0.8,
          }}>
          Saved recipes
        </Text>
      </View>
      <View
        style={{
          borderRadius: 10,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          right: 20,
          height: '7%',
          width: '50%',
          margin: 20,
          backgroundColor: '#e23e3e',
          padding: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Recipes</Text>
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={favItems}
        keyExtractor={item => item._id}
        {...props}
        renderItem={({item}) => (
          <SavedMeals title={item.title} image={item.image} />
        )}
      /> */}
      <SavedMeals
        title="Spaghetti with Tomato Sauce"
        image="http://10.0.2.2:3000/profile/profile_16521206226771.jpg"
      />
      <SavedMeals
        title="Pancakes"
        image="http://10.0.2.2:3000/profile/profile_16521226806377.jpg"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SaveScreen;
