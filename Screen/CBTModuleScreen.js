 
import data from './questions.json';
import React, {useState, createRef} from 'react';
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

const CBTModuleScreen = ({navigation}) => {
const [errortext, setErrortext] = useState('');

const [previousQuestion, setPreviousQuestion] = useState(1);
const [currentQuestion, setCurrentQuestion] = useState(1);
const [nextQuestion, setNextQuestion] = useState(1);

const updateQuestion = () => {
  let question;
   for (let i=0 ; i<data.length ; i++){
     if(data[i].questionId==currentQuestion){
           question= i;
     break;
     }
   }
    return question;
  }
  const updateOption = () => {
    let option;
      for (let i=0 ; i<data.length ; i++){
       if(data[i].questionId==currentQuestion){
              option=i;
              break;
         }
     }
        return option;
    }
  const handleSubmitButton = () => {
    setErrortext('');
    //alert(previousQuestion+" "+currentQuestion+" "+nextQuestion);
    navigation.navigate('ResultScreen');
      }
  const handleOptionsButton = (ansOptionId) => {
    setErrortext('');
    //setPreviousQuestion(currentQuestion);
    setNextQuestion(ansOptionId);
    //setCurrentQuestion(nextQuestion);
   };
  const handlePreviousButton = () => {
    setErrortext('');
    navigation.navigate('Fitness');
    //setCurrentQuestion(previousQuestion);
    //setPreviousQuestion(currentQuestion);
    //setNextQuestion(previousQuestion);
   };
  const handleNextButton = () => {
    setErrortext('');
    if(nextQuestion==currentQuestion){
      alert('user should choose one of the options')
    }else{
     setPreviousQuestion(currentQuestion);
    setCurrentQuestion(nextQuestion);}
    //setNextQuestion(currentQuestion);
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
           <Text       
          style={styles.quesStyle}>
          {data[updateQuestion()].questionId+" . "+data[updateQuestion()].questionText}
           </Text>
           </View>
          <View style={styles.optionStyle}>
          {data[updateOption()].answerOptions.map((answerOption) => (
                        <View style={styles.rowAnsStyle}>
                        <TouchableOpacity>
                        <Text
                        onPress={() =>
                        handleOptionsButton(answerOption.answerId)}>{answerOption.answerId+" . "+answerOption.answerText}
                        </Text>
                        </TouchableOpacity>
                        </View>
           ))}
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          
            <TouchableOpacity
            style={styles.subButtonStyle}
             activeOpacity={0.5}
             onPress={handleNextButton}>
            <Text 
            style={styles.buttonTextStyle}>
            NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.subButtonStyle}
            activeOpacity={0.5}
            onPress={handlePreviousButton}>
            <Text 
            style={styles.buttonTextStyle}>PREVIOUS</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.subButtonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default CBTModuleScreen;
 
const styles = StyleSheet.create({
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
