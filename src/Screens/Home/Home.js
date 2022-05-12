import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {DATA} from '../../Constants/modals';

import * as mealsActions from './../../Store/actions/meals';

const Item = ({title}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      {
        title === 'All' ? console.log(title) : '';
      }
    }}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Category = props => {
  return (
    <View
      style={{
        backgroundColor: '#f1f1f1',
        padding: 10,
        left: 10,
        borderRadius: 20,
        margin: 15,
        marginTop: 55,
        //height: '44%',
        height: '90%',
        width: '40%',
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            backgroundColor: '#f1f1f1',
            width: '70%',
            height: '200%',
            top: -50,
            left: 22,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{
              backgroundColor: 'grey',
              padding: 40,
              justifyContent: 'center',
              alignItems: 'baseline',
              borderRadius: 40,
            }}
          />
        </View>
        <Text
          style={{fontSize: 18, color: 'black', fontWeight: '600', top: 50}}>
          {props.title}
        </Text>
      </TouchableOpacity>
      <View style={{top: 70}}>
        <Text style={{margin: 10, opacity: 0.8}}>Time</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
              left: 10,
              marginBottom: 10,
            }}>
            {props.steps} Mins
          </Text>
          <TouchableOpacity
            onPress={props.onSave}
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 5,
              bottom: 10,
            }}>
            <Icons name="bookmark" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Home = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const fabMeal = useSelector(state => state.meals.favorites);
  //console.log('fff', fabMeal);

  const mealItems = useSelector(state => state.meals.availableMeals);
  useEffect(() => {
    loadProducts();
  }, [mealItems]);

  const loadProducts = async () => {
    await dispatch(mealsActions.MealsAction());
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          margin: 20,
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text style={{fontSize: 22, fontWeight: '600', color: '#303030'}}>
          Find best recipes
        </Text>
        <Text
          style={{
            fontSize: 22,
            lineHeight: 23,
            fontWeight: '600',
            color: '#303030',
          }}>
          for cooking
        </Text>
      </View>
      <View style={styles.search}>
        <Icons name="search" size={20} style={{left: 10}} />
        <TextInput placeholder="Search receipe" style={{paddingLeft: 15}} />
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 22, fontWeight: '600', color: '#303030'}}>
          Popular category
        </Text>
      </View>
      <View style={{width: '100%', height: '5%'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flat1}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item title={item.title} />}
        />
      </View>

      <View>
        <FlatList
          data={mealItems}
          keyExtractor={item => item._id}
          numColumns={2}
          contentContainerStyle={{marginBottom: 200}}
          renderItem={({item}) => (
            <Category
              title={item.title}
              steps={item.ingredients.length}
              image={item.image}
              onSave={() => {
                dispatch(mealsActions.addToFavorite(item));
              }}
              onPress={() => navigation.navigate('Details', {meals: item})}
            />
          )}
        />
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 22, fontWeight: '600'}}>Popular creators</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#a7ffb5'},
  search: {
    borderWidth: 1,
    opacity: 0.5,
    marginBottom: 10,
    borderColor: 'grey',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flat1: {
    padding: 10,
    //backgroundColor: '#a7ffb5',
  },
  item: {
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  title: {
    color: 'red',
  },
});

export default Home;
