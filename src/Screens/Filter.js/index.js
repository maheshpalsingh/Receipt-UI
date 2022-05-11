import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Switch, TouchableOpacity} from 'react-native';
import IconS from 'react-native-vector-icons/Ionicons';

const Filter = () => {
  const navigation = useNavigation();
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isLactoseFree, isGlutenFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <View style={styles.switch}>
        <Text style={styles.text}>ISLACTOSEFREE </Text>
        <Switch
          trackColor={{true: 'purple'}}
          thumbColor="purple"
          value={isLactoseFree}
          style={{justifyContent: 'flex-end'}}
          onValueChange={val => setisLactoseFree(val)}
        />
      </View>
      <View style={styles.switch}>
        <Text style={styles.text}>ISGLUTENFREE </Text>
        <Switch
          trackColor={{true: 'purple'}}
          thumbColor="purple"
          value={isGlutenFree}
          style={{justifyContent: 'flex-end'}}
          onValueChange={val => setisGlutenFree(val)}
        />
      </View>
      <View style={styles.switch}>
        <Text style={styles.text}>ISVEGAN </Text>
        <Switch
          trackColor={{true: 'purple'}}
          thumbColor="purple"
          value={isVegan}
          style={{justifyContent: 'flex-end'}}
          onValueChange={val => setisVegan(val)}
        />
      </View>
      <View style={styles.switch}>
        <Text style={styles.text}>ISVEGETARIAN </Text>
        <Switch
          trackColor={{true: 'purple'}}
          thumbColor="purple"
          style={{justifyContent: 'flex-end'}}
          value={isVegetarian}
          onValueChange={val => setisVegetarian(val)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          saveFilters();
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'purple',
          borderRadius: 20,
          marginVertical: 20,
          left: '30%',
          width: '30%',
          height: '8%',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
    margin: 20,
    textAlign: 'center',
    color: 'black',
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});

export default Filter;
