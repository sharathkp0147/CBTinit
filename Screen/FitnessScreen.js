import React, {useState} from 'react';
import moment from 'moment';
import { FitnessTrackerAPI } from '@kilohealth/rn-fitness-tracker';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function FitnessScreen() {

const [value, setValue] = useState(0);

}

export function buildDailySteps(steps) {
  const results = {}
  for (const step of steps) {
    if (step == undefined) {
      continue
    }

    const dateFormatted = getFormattedDate(new Date(step.endDate))

    if (!(dateFormatted in results)) {
      results[dateFormatted] = 0
    }

    results[dateFormatted] += step.steps
  }

  const dateMap = []
  for (const index in results) {
    dateMap.push({ date: index, value: results[index] })
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.touchableV}/>
      <Text style={styles.textC}>{value}</Text>
      <View style={styles.touchableV}/>

       <TouchableOpacity style={styles.touchable} onPress={buildDailySteps(10)}>
        <Text style={styles.touchableText}>Check Now</Text>
      </TouchableOpacity>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#7986cb',
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
  },
  touchableText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
  textC: {
    color: 'blue',
    fontSize: 40,
  },
  touchableV: {
    alignItems: 'center',
    backgroundColor: '#7986cb',
     width:100,
     height:1,
   },
});