import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

//react library is all about how different components work together.ability to assemble many components

//react-native knows how to take info from those components and knows how to show it on mobile devices. We want to only import Text and StyleSheet from react-native for this 

const ComponentsScreen = function() {
  const name = 'Will';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;