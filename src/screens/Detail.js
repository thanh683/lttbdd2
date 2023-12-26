// Detail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = ({ route }) => {
  const { productId } = route.params;

  // Fetch detailed information for the selected product using productId
  // ...

  return (
    <View style={styles.container}>
      <Text>Details for Product ID: {productId}</Text>
      {/* Display more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
