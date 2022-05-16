import React, {createRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';

import {URL} from '../../Store/actions/meals';

import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
const WIDTH = Dimensions.get('window').width;

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
};

const Signup = () => {
  const {navigate} = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const passwordInputRef = createRef();
  const cnoInputRef = createRef();
  const [profile, setprofile] = useState('');
  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    const formdata = new FormData();
    formdata.append('profile', {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      image: images.assets[0].fileName,
    });
    setprofile(images.assets[0].fileName);

    console.log('Image', images);
  };
  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      Alert.alert('Warning', 'Please enter Name', [{text: 'OK'}]);
      return;
    }
    if (!userEmail) {
      Alert.alert('Warning', 'Please enter Email', [{text: 'OK'}]);
      return;
    }
    if (!userAge) {
      Alert.alert('Warning', 'Please enter Age', [{text: 'OK'}]);
      return;
    }
    // if (!userContact || userContact.length !== 10) {
    //   Alert.alert('Warning', 'Please enter Contact No.', [{text: 'OK'}]);
    //   return;
    // }
    if (!userPassword) {
      Alert.alert('Warning', 'Please enter Password', [{text: 'OK'}]);
      return;
    }

    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      password: userPassword,
      aboutme: userContact,
      image: profile,
    };
    console.log(dataToSend);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .post(`${URL}/users/register`, dataToSend, config)
      .then(
        changeModalVisible(true),
        setTimeout(() => {
          changeModalVisible(false);
        }, 2000),
      )
      .then(() => {
        navigate('Start');
      })
      .catch(error => {
        Alert.alert('Warning', 'Email Already Exists', [{text: 'OK'}]);
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={[
          StyleSheet.absoluteFillObject,
          {
            height: '100%',
            width: '100%',
          },
        ]}
        source={require('../../Assets/Main/login.png')}
      />
      <ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setisModalVisible(!isModalVisible);
          }}>
          <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
              <Icon name="checkmark-circle-outline" size={90} color="white" />
              <View style={styles.modaltext}>
                <Text style={{fontSize: 26}}>Registration Success</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <View
          style={{
            top: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={[
              {
                width: '60%',
              },
            ]}
            source={require('../../Assets/Main/logo.png')}
          />

          <Text style={styles.title}>Welcome to Recipes App</Text>
          <Text style={styles.subtitle}>Create a free Account 🎁</Text>
        </View>
        <KeyboardAvoidingView enabled="true">
          <View style={{top: 50}}>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              mode="flat"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />

            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              mode="flat"
              placeholder="Enter Email"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />

            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              mode="flat"
              placeholder="Enter Password"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />

            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={UserAge => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              mode="flat"
              placeholder="Enter Age"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                cnoInputRef.current && cnoInputRef.current.focus()
              }
              blurOnSubmit={false}
            />

            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={UserContact => setUserContact(UserContact)}
              underlineColorAndroid="#f000"
              mode="flat"
              placeholder="About You"
              keyboardType="numeric"
              ref={cnoInputRef}
              returnKeyType="next"
              blurOnSubmit={false}
            />

            <TouchableOpacity activeOpacity={0.5} onPress={openGallery}>
              <Text style={{color: 'white'}}>Select File</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonView}
              onPress={handleSubmitButton}>
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  buttonView: {
    top: -30,
    left: -19,
    flex: 1,
    backgroundColor: 'red',
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 350,
    backgroundColor: 'grey',
    fontSize: 22,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    height: 200,
    width: WIDTH - 60,
    paddingTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

  modaltext: {
    flex: 1,
    fontSize: '30',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Signup;
