// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Modal,
//   Dimensions,
// } from 'react-native';
// import axios from 'axios';
// import {setToken} from '../Store/actions/meals';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// import {URL} from '../Store/actions/meals';
// const WIDTH = Dimensions.get('window').width;

// const Authtab = () => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [errortext, setErrortext] = useState('');
//   const [isModalVisible, setisModalVisible] = useState(false);
//   const dispatch = useDispatch();

//   const changeModalVisible = bool => {
//     setisModalVisible(bool);
//   };

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       Alert.alert('Warning', 'Please enter your Email', [{text: 'OK'}]);
//       return;
//     }
//     if (!userPassword) {
//       Alert.alert('Warning', 'Please enter your Password', [{text: 'OK'}]);
//       return;
//     }
//     let dataToSend = {email: userEmail, password: userPassword};

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     axios
//       .post(`${URL}/users/login`, dataToSend, config)
//       .then(async response => {
//         const {token} = response.data;
//         //console.log('while login..', token);
//         dispatch(setToken(token));
//         try {
//           await AsyncStorage.setItem('token', JSON.stringify({token}));
//         } catch (e) {
//           console.log('Error while saving token in Async', e);
//         }
//       })
//       .then(() => {
//         changeModalVisible(true),
//           setTimeout(() => {
//             changeModalVisible(false);
//           }, 3000);
//       })
//       .catch(function (error) {
//         Alert.alert('Invalid Credentials', 'Wrong Username or Password', [
//           {text: 'OK'},
//         ]);
//       });
//   };

//   return (
//     <View>
//       <Image
//         style={[
//           StyleSheet.absoluteFillObject,
//           {
//             width: '100%',
//           },
//         ]}
//         source={require('./../Assets/Main/login.png')}
//       />
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={() => {
//           setisModalVisible(!isModalVisible);
//         }}>
//         <TouchableOpacity disabled={true} style={styles.container}>
//           <View style={styles.modal}>
//             <Icon name="checkmark-circle-outline" size={90} color="white" />
//             <View style={styles.modaltext}>
//               <Text style={{fontSize: 26}}>Login Success</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//       <View
//         style={{
//           top: 70,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Image
//           style={[
//             {
//               width: '60%',
//             },
//           ]}
//           source={require('./../Assets/Main/logo.png')}
//         />
//         <Text style={{color: '#fff', fontSize: 30, marginVertical: 20}}>
//           Welcome back...
//         </Text>
//       </View>
//       <View style={{top: 70}}>
//         <TextInput
//           style={styles.input}
//           value={userEmail}
//           placeholderTextColor="white"
//           onChangeText={UserEmail => setUserEmail(UserEmail)}
//           placeholder="Enter Email"
//         />
//         <TextInput
//           style={styles.input}
//           value={userPassword}
//           onChangeText={UserPassword => setUserPassword(UserPassword)}
//           placeholderTextColor="white"
//           placeholder="Enter Password"
//           keyboardType="default"
//           secureTextEntry={true}
//         />
//         <TouchableOpacity style={styles.buttonView} onPress={handleSubmitPress}>
//           <Text style={styles.text}>LOGIN</Text>
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           top: 200,
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'row',
//         }}>
//         <Text style={{color: 'white', fontSize: 16}}>
//           Don't have account ?{' '}
//         </Text>
//         <TouchableOpacity>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 18,
//               top: 2,
//               fontFamily: 'Poppins-SemiBold',
//             }}>
//             Create now
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     color: 'white',
//     paddingLeft: 10,
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: 'white',
//     marginHorizontal: 30,
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   buttonView: {
//     margin: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 45,
//     backgroundColor: 'grey',
//     fontSize: 22,
//     borderRadius: 5,
//   },
//   text: {
//     color: 'white',
//     fontSize: 18,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal: {
//     height: 200,
//     width: WIDTH - 60,
//     paddingTop: 10,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'grey',
//   },

//   modaltext: {
//     flex: 1,
//     fontSize: '30',
//   },
// });

// export default Authtab;

import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
const Stack = createNativeStackNavigator();

const Authtab = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Authtab;
