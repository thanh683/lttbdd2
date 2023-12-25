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

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
            Hot deals
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
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
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <Text style={styles.text}>{product.title}</Text>
                  <Text style={styles.productPrice}>
                    Price: ${product.price}
                  </Text>
                  <Button
                    icon={
                      <Icon
                        name="add-shopping-cart"
                        size={25}
                        color="#ffffff"
                      />
                    }
                    buttonStyle={styles.buyButton}
                    title="BUY"
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Thêm một ScrollView ngang khác cho sản phẩm của View thứ hai */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container}>
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() => handleProductPress(product.id)}
              >
                <Card style={styles.card}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <Text style={styles.text}>{product.title}</Text>
                  <Text style={styles.productPrice}>
                    Price: ${product.price}
                  </Text>
                  <Button
                    icon={
                      <Icon
                        name="add-shopping-cart"
                        size={25}
                        color="#ffffff"
                      />
                    }
                    buttonStyle={styles.buyButton}
                    title="BUY"
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container}>
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() => handleProductPress(product.id)}
              >
                <Card style={styles.card}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <Text style={styles.text}>{product.title}</Text>
                  <Text style={styles.productPrice}>
                    Price: ${product.price}
                  </Text>
                  <Button
                    icon={
                      <Icon
                        name="add-shopping-cart"
                        size={25}
                        color="#ffffff"
                      />
                    }
                    buttonStyle={styles.buyButton}
                    title="BUY"
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    // Sử dụng justifyContent: 'space-evenly' để giữ khoảng cách giữa các sản phẩm
    justifyContent: "space-evenly",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productContainer: {
    width: 250, // Đặt chiều rộng theo ý muốn
    height: 250,
    marginLeft: 10, // Khoảng cách giữa các sản phẩm
  },
  card: {
    flex: 1,
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
  productPrice: {
    marginBottom: 10,
    textAlign: "center",
  },
  buyButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export default HomeScreen;
