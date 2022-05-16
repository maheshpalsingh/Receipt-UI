import React, {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SavedMeals} from './MealUI';

import * as mealsActions from './../../Store/actions/meals';
import {useNavigation} from '@react-navigation/native';

const SaveScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favItems = useSelector(state => {
    const transformedFav = [];
    for (const key in state.meals.favorites) {
      transformedFav.push({
        id: key,
        title: state.meals.favorites[key].title,
        image: state.meals.favorites[key].image,
        affordability: state.meals.favorites[key].affordability,
        category: state.meals.favorites[key].category,
        complexity: state.meals.favorites[key].complexity,
        duration: state.meals.favorites[key].duration,
        steps: state.meals.favorites[key].steps,
        ingredients: state.meals.favorites[key].ingredients,
      });
    }
    return transformedFav;
  });
  //console.log('AAA', favItems);
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
          flexDirection: 'row',
          height: '7%',
          width: '45%',
          marginBottom: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            right: 20,
            flexDirection: 'row',
            height: '100%',
            width: '100%',
            margin: 20,
            backgroundColor: '#e23e3e',
            padding: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Recipes</Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            right: 20,
            height: '100%',
            width: '100%',
            margin: 20,

            // backgroundColor: '#e23e3e',
            padding: 10,
          }}>
          {favItems.length > 0 && (
            <Text style={{color: '#e23e3e', textAlign: 'left', fontSize: 18}}>
              {favItems.length} Saved
            </Text>
          )}
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={favItems}
        contentContainerStyle={{paddingBottom: 90}}
        keyExtractor={item => item.id}
        {...props}
        renderItem={({item}) => (
          <SavedMeals
            title={item.title}
            image={item.image}
            remove={() => {
              dispatch(mealsActions.RemoveFavorite(item.id));
            }}
            onPress={() => navigation.navigate('Details', {meals: item})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SaveScreen;
