import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import * as mealsActions from './../../Store/actions/meals';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    title: 'Summer',
  },
  {
    id: 2,
    title: 'Quick & Easy',
  },
  {
    id: 3,
    title: 'Breakfast',
  },
  {
    id: 4,
    title: 'Asian',
  },
  {
    id: 5,
    title: 'French',
  },
  {
    id: 6,
    title: 'Light & Lovely',
  },
  {
    id: 7,
    title: 'Exotic',
  },
  {
    id: 8,
    title: 'German',
  },
  {
    id: 9,
    title: 'Hamburgers',
  },
  {
    id: 10,
    title: 'Italian',
  },
];

const Category = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        //backgroundColor: '#f6cefc',
        backgroundColor: props.bg,
        padding: 10,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 14, color: 'black', fontWeight: '400'}}>
        {props.steps} Ingredients
      </Text>
      <View
        style={{
          width: '100%',
          height: '50%',
          bottom: -25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'baseline',
            width: '80%',
            height: '70%',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Item = ({title}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      console.log(title);
    }}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = props => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const mealItems = useSelector(state => state.meals.availableMeals);
  useEffect(() => {
    loadProducts();
  }, [mealItems]);

  const loadProducts = async () => {
    await dispatch(mealsActions.MealsAction());
  };

  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.search}>
          <Icon name="search" size={20} />
          <TextInput placeholder="Search" style={{paddingLeft: 15}} />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('ddd');
            navigation.navigate('Filters');
          }}
          style={styles.filter}>
          <LottieView
            autoPlay
            loop
            source={require('../../Assets/LottieView/98541-menu-lottie-animation.json')}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: '7%'}}>
        <FlatList
          horizontal
          contentContainerStyle={styles.flat1}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item title={item.title} />}
        />
      </View>

      {/* <View style={{flex: 1, backgroundColor: 'red'}}> */}
      <FlatList
        data={mealItems}
        keyExtractor={item => item._id}
        contentContainerStyle={{backgroundColor: 'pink', flex: 1}}
        renderItem={({item}) => (
          <Category
            title={item.title}
            steps={item.ingredients.length}
            image={item.image}
            bg={item.bg}
            onPress={() => navigation.navigate('Details', {meals: item})}
          />
        )}
        // numColumns={2}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#a7ffb5'},
  search: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 30,
    marginVertical: 22,
    marginLeft: 25,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    width: '10%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  title: {
    color: 'black',
  },
  flat1: {
    padding: 10,
    backgroundColor: '#a7ffb5',
  },
});

export default HomeScreen;
