import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import axios from 'axios';
import {MultiSelect, Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {DATA} from '../../Constants/modals';
import {URL} from '../../Store/actions/meals';
import {post} from '../../../../demo2_backend/src/routers/mealRouters';

const data = [
  {label: 'simple', value: 'simple'},
  {label: 'hard', value: 'hard'},
  {label: 'medium', value: 'medium'},
];

const AddMeal = () => {
  const {navigate} = useNavigation();
  const [userName, setUserName] = useState('');
  const [time, settime] = useState('');
  const [errortext, setErrortext] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [complexity, setComplexity] = useState(null);

  const [inputInstruc, setInputInstruc] = useState([{value: ''}]);
  const [inputIngre, setInputIngre] = useState([{value: ''}]);

  const addHandler = () => {
    const _inputInstruc = [...inputInstruc];
    _inputInstruc.push({value: ''});
    setInputInstruc(_inputInstruc);
  };
  const addHandler1 = () => {
    const _inputIngre = [...inputIngre];
    _inputIngre.push({value: ''});
    setInputIngre(_inputIngre);
  };
  const deleteHandler = key => {
    const _inputInstruc = inputInstruc.filter((input, index) => index != key);
    setInputInstruc(_inputInstruc);
  };
  const deleteHandler1 = key => {
    const _inputIngre = inputIngre.filter((input, index) => index != key);
    setInputIngre(_inputIngre);
  };
  const inputHandler = (text, key) => {
    const _inputInstruc = [...inputInstruc];
    _inputInstruc[key].value = text;
    // _inputInstruc[key].key = key;
    setInputInstruc(_inputInstruc);
  };
  const inputHandler1 = (text, key) => {
    const _inputIngre = [...inputIngre];
    _inputIngre[key].value = text;
    _inputIngre[key].key = key;
    setInputIngre(_inputIngre);
  };

  const handleSubmitButton = () => {
    setErrortext('');
    // if (!userName) {
    //   Alert.alert('Warning', 'Please enter Name', [{text: 'OK'}]);
    //   return;
    // }
    // if (!time) {
    //   Alert.alert('Warning', 'Please enter time', [{text: 'OK'}]);
    //   return;
    // }
    // if (!selectedCategory) {
    //   Alert.alert('Warning', 'Please select category', [{text: 'OK'}]);
    //   return;
    // }
    // if (!complexity) {
    //   Alert.alert('Warning', 'Please select complexity', [{text: 'OK'}]);
    //   return;
    // }
    // if (!inputInstruc) {
    //   Alert.alert('Warning', 'Please add Instructions', [{text: 'OK'}]);
    //   return;
    // }
    // if (!inputIngre) {
    //   Alert.alert('Warning', 'Please enter Ingredients', [{text: 'OK'}]);
    //   return;
    // }
    // setLoading(true);
    var dataToSend = {
      title: userName,
      category: selectedCategory,
      duration: time,
      complexity: complexity,
      ingredients: inputIngre,
      steps: inputInstruc,
    };
    console.log(dataToSend);
    const config = {
      //method:POST,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // fetch(`${URL}/meals/add1`, dataToSend, config)
    axios
      .post(`${URL}/meals/add1`, dataToSend, config)
      // .then(
      //   changeModalVisible(true),
      //   setTimeout(() => {
      //     changeModalVisible(false);
      //   }, 2000),
      // )
      .then(() => {
        console.log('Meal Addeed');
      })
      .catch(error => {
        Alert.alert('Warning', 'Error', [{text: 'OK'}]);
        // setLoading(false);
        console.error(error);
      });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 100,
      }}>
      <KeyboardAvoidingView enabled="true">
        <View style={{marginVertical: 10}}>
          <Text style={{marginLeft: 10, color: 'black', fontSize: 16}}>
            RECIPE NAME
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={UserName => setUserName(UserName)}
            placeholder="E.g. Amritsari Chole"
            mode="flat"
            autoCapitalize="sentences"
            returnKeyType="next"
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <View
            style={{
              height: '10%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{marginLeft: 10, color: 'black', fontSize: 16}}>
              COOKING TIME(in Minutes)
            </Text>
            <TextInput
              style={{
                color: 'black',
                borderRadius: 5,
                width: '15%',
                height: '90%',
                borderWidth: 1,
                borderColor: '#e23e23',
                margin: 30,
                right: -85,
                textAlign: 'center',
              }}
              placeholderTextColor="black"
              onChangeText={UserName => settime(UserName)}
              placeholder="30"
              keyboardType="number-pad"
              mode="flat"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            data={DATA}
            labelField="title"
            valueField="title"
            placeholder="Select category"
            searchPlaceholder="Search..."
            value={selectedCategory}
            onChange={item => {
              setSelectedCategory(item);
            }}
            // renderLeftIcon={() => (
            //   <Icon style={styles.icon} color="black" name="trash" size={20} />
            // )}
            selectedStyle={styles.selectedStyle}
          />

          <Text
            style={{
              top: 10,
              marginHorizontal: 10,
              color: 'black',
              fontSize: 16,
            }}>
            Complexity
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select complexity"
            searchPlaceholder="Search..."
            value={complexity}
            onChange={item => {
              setComplexity(item.value);
            }}
            // renderLeftIcon={() => (
            //   <Icon style={styles.icon} color="black" name="trash" size={20} />
            // )}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{marginLeft: 20, fontSize: 16, color: 'black'}}>
              INSTRUCTIONS
            </Text>
            <TouchableOpacity style={{right: 10}} onPress={addHandler}>
              <Text
                style={{
                  marginHorizontal: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                ADD +
              </Text>
            </TouchableOpacity>
          </View>
          {inputInstruc.map((input, key) => (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Enter Steps'}
                value={input.value}
                onChangeText={text => inputHandler(text, key)}
              />
              <TouchableOpacity onPress={() => deleteHandler(key)}>
                <Text style={{color: 'red', fontSize: 13}}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{marginLeft: 20, fontSize: 16, color: 'black'}}>
              INGREDIENTS
            </Text>
            <TouchableOpacity style={{right: 10}} onPress={addHandler1}>
              <Text
                style={{
                  marginHorizontal: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                ADD +
              </Text>
            </TouchableOpacity>
          </View>
          {inputIngre.map((input, key) => (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Enter Ingredients'}
                value={input.value}
                onChangeText={text => inputHandler1(text, key)}
              />
              <TouchableOpacity onPress={() => deleteHandler1(key)}>
                <Text style={{color: 'red', fontSize: 13}}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity
            style={styles.buttonView}
            onPress={handleSubmitButton}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    left: -20,
    color: 'black',
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '95%',
    borderColor: '#E23E3E',
    marginHorizontal: 30,
    marginTop: 7,
    marginBottom: 5,
  },
  dropdown: {
    //top: -20,
    //backgroundColor: 'red',
    height: 50,
    margin: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    //top: -50,
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  inputContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  buttonView: {
    top: -30,
    left: -30,
    flex: 1,
    backgroundColor: 'red',
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 350,
    backgroundColor: '#e23e23',
    fontSize: 22,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddMeal;
