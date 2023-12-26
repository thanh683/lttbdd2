// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <View style={styles.content}>
      <Text>This is the Content</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    content: {  
    width: "100%",
    height:'100px',
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Content;
