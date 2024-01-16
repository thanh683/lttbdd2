<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Card, Button, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
=======
// HomeScreen.js
// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleProductPress = (productId) => {
    navigation.navigate("Details", { productId });
  };

  return (
    <>
      <ScrollView>
        <Header title="SHOPPE" />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 130,
              marginLeft: 15,
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Category
          </Text>
          <View
            style={{
              marginTop: 130,
              flex: 1,
              flexDirection: "row-reverse",
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: "red", marginEnd: 15 }}>
              View all
            </Text>
          </View>
        </View>

        
          <View style={styles.container}>
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() => {
                  navigation.navigate("Details", { productId: product.id });
                }}
              >
                <Card style={styles.card}>
                  <Image
                    source={{ uri: product.images[0] }}
                    style={styles.productImage}
                  />
                  <Text style={styles.text}>{product.title}</Text>
                  <Text style={styles.productPrice}>
                    Price: ${product.price}
                  </Text>                  
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: "space-evenly",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productContainer: {
    width: "50%",
    height: 250,
    marginBottom: 50,
  },
  card: {
    flex: 1,
    color: "red",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    height: 40,
    overflow: "hidden",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productPrice: {marginBottom: 10,
    textAlign: "center",
=======
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
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7
  },
  buyButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});
<<<<<<< HEAD

export default HomeScreen;
=======
export default HomeScreen;
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7
