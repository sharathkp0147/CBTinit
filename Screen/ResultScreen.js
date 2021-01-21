
import React, {useState, createRef} from 'react';
import { Card } from 'react-native-elements';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  TouchableOpacity,
  ScrollView,
    } from 'react-native';

import Loader from './Components/Loader';

const ResultScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();

  const handleOptionButton = () => {
    setErrortext('');
       alert('answer chosen');
      return;
  };
  const handleSubmitButton = () => {
    setErrortext('');
       alert('submitted');
      return;
  };
  const handlePreviousButton = () => {
    setErrortext('');
       alert('Going back to login ');
      return;
  };
  const handleNextButton = () => {
    setErrortext('');
       alert('Please choose any answer !');
      return;
  };
  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
       <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}
          justifyContent="center"
          alignContent="center">
          <View style={styles.container}>
        <Card title="Score Card View">
        <Text style={styles.paragraph}>
              Score      Date     Time
          </Text>
           <Text style={styles.paragraph}>
              80/100   12-12-12  10:10 am
          </Text>
        </Card>
        </View>
        </View>
           <TouchableOpacity
          style={styles.subButtonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>View History</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  optionStyle: {
    flexDirection: 'column',
    marginLeft: 35,
    marginRight: 35
  },
  AlignRowStyle: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
rowAnsStyle: {
  alignContent:'center',
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
borderWidth: 2,
borderRadius: 30,
padding:10,
fontSize:16,
height: 30,
width:'100%',
borderColor: '#7DE24E',
flexDirection: 'row',
margin: 10,
},
rowStyle: {
  alignContent:'center',
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
borderWidth: 2,
borderRadius: 10,
padding:7,
borderColor: 'dodgerblue',
flexDirection: 'row',
flex: 2,
height: 30,
width:'50%',
marginTop: 20,
margin: 10,
},
  buttonStyle: {
    backgroundColor: 'dodgerblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'dodgerblue',
    height: 40,
    width:"40%",
    alignItems: 'center',
    borderRadius: 30,
  },
  subButtonStyle: {
    backgroundColor: 'dodgerblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'dodgerblue',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  rightButtonStyle: {
    backgroundColor: 'dodgerblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'dodgerblue',
    height: 40,
    width:"40%",
    left:"20%",
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 0.5,
    numberOfLines:1 ,
    color: 'white',
    fontSize:16,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderWidth: 1,
    borderRadius: 30,
    padding:7,
    borderColor: 'white',
  },
  quesStyle: {
    flex: 1,
    numberOfLines:2 ,
    fontSize:18,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderWidth: 2,
    borderRadius: 30,
    padding:10,
    borderColor: 'dodgerblue',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});