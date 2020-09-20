import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = function() {
  // useState will initialize the default/starting value of state. [] are array destructuring. 
  // Anytime we want to change the state, we dont modify the counter variable directly. Instead, we will call setCounter [state variable, tracks change on state variable]
  // Anytime we call setCounter, react will rerun the entire CounterScreen function and will rerender it with the new value
  const [counter, setCounter] = useState(0);

  return (
  <View>
    <Button title="Increase" onPress={() => {
      //Dont do this: counter++;
      setCounter(counter + 1);

    }}/>
    <Button title="Decrease" onPress={() => {
      setCounter(counter - 1);
    }}/>
    <Text>Current Count: {counter}</Text>

  </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;