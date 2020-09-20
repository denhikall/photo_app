import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = function(props) {
   return (
      <View>
        <Image source={props.imageSource} />
        <Text> {props.title} </Text>
        <Text> Image score - {props.score} </Text>
      </View>
   );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ImageDetail; 