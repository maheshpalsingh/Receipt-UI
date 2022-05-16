import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Loader from '../../Components/Loader/AppLoader';
import {DATA} from '../../Constants/modals';

import * as mealsActions from './../../Store/actions/meals';
import {Category} from './MealUI';

const Home = props => {
  const [masterdata, setmasterdata] = useState([]);
  const [filtereddata, setfilterdata] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [searchdata, setsearchdata] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />;
  }

  useEffect(() => {
    setLoading(true);
    fetchProducts();
    //fetchProductsByCategory();
    setLoading(false);
  }, []);

  const fetchProducts = async () => {
    axios
      .get(`${mealsActions.URL}/meals/all`)
      .then(response => {
        setfilterdata(response.data ?? []);
        setmasterdata(response.data ?? []);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const fetchProductsByCategory = async cat => {
    axios
      .get(`${mealsActions.URL}/meals/bycategory/${cat}`)
      .then(response => {
        setfilterdata(response.data ?? []);
        setmasterdata(response.data ?? []);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // const mealItems = useSelector(state => state.meals.availableMeals);
  // useEffect(() => {
  //   loadProducts();
  // }, [mealItems]);
  // const loadProducts = async () => {
  //   await dispatch(mealsActions.MealsAction());
  // };

  const Item = ({item}) => (
    <View style={{flex: 1, padding: 10}}>
      <TouchableOpacity
        onPress={() => {
          setSelectedCategory(item.id);
          let title = item.title;
          title == 'All' ? fetchProducts() : fetchProductsByCategory(title);
        }}>
        <Text
          style={{
            padding: 10,
            backgroundColor: selectedCategory == item.id ? '#E23E3E' : 'white',
            color: selectedCategory == item.id ? 'white' : 'red',
            borderRadius: 12,
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const searchFilter = text => {
    if (text) {
      const newdata = masterdata.filter(item => {
        const itemdata = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemdata.indexOf(textData) > -1;
      });
      setTimeout(() => setfilterdata(newdata), 3000);
      setsearchdata(text);
    } else {
      setfilterdata(masterdata);
      setsearchdata(text);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginVertical: 20,
          marginLeft: 10,
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
            color: '#303030',
            textAlign: 'left',
            // backgroundColor: 'red',
          }}>
          Find best recipes
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
            lineHeight: 28,

            color: '#303030',
          }}>
          for cooking
        </Text>
      </View>
      <View style={styles.search}>
        <Icons name="search" size={22} style={{left: 10}} />
        <TextInput
          placeholder="Search receipe"
          style={{
            flex: 1,
            paddingLeft: 15,
            justifyContent: 'center',
            fontFamily: 'Poppins-Regular',
          }}
          value={searchdata}
          onChangeText={text => {
            searchFilter(text);
          }}
        />
      </View>
      <View style={{margin: 10, marginLeft: 20}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
            color: '#181818',
          }}>
          Popular category
        </Text>
      </View>
      <View
        style={{
          top: -5,
          width: '100%',
          height: '8%',
          alignSelf: 'center',
        }}>
        <FlatList
          horizontal
          contentContainerStyle={{marginHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={Item}
        />
      </View>

      <View>
        <FlatList
          data={filtereddata}
          keyExtractor={item => item._id}
          numColumns={2}
          contentContainerStyle={{padding: 10, paddingBottom: 420}}
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
    opacity: 0.7,
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
    backgroundColor: '#a7ffb5',
  },
  item: {
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  title: {},
});

export default Home;
