// HomeScreen.js
// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => {
        setProducts(result);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleProductPress = (productId) => {
    navigation.navigate('Detail', { productId });
  };

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={styles.container}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            onPress={() => handleProductPress(product.id)}
          >
            <Card style={styles.card}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.text}>{product.title}</Text>
              <Text style={styles.productPrice}>Price: ${product.price}</Text>
              <Button
                icon={<Icon name="add-shopping-cart" size={25} color="#ffffff" />}
                buttonStyle={styles.buyButton}
                title="BUY"
              />
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  productContainer: {
    width: '45%',
    height: 250, // Adjust the height to 250
    marginBottom: 50,
  },
  card: {
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    overflow: 'hidden',
    textAlign: "center"
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productPrice: {
    marginBottom: 10,
    textAlign: "center"
  },
  buyButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});
export default HomeScreen;
