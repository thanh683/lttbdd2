import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../Cart/cartSlice";

export default function Item({
  item,
  onIncreaseCount,
  onDecreaseCount,
  onRemoveFromCart,
}) {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item.id}`)
      .then((response) => response.json())
      .then((result) => setProductDetail(result))
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [item.id]);

  const renderImage = () => (
    <Image
      source={{ uri: productDetail?.image }}
      style={styles.productImage}
      resizeMode="cover" // Set resizeMode to cover or contain based on your preference
    />
  );

  return (
    <ScrollView>
      {productDetail != null ? (
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>{renderImage()}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Text>
              {item.count} x ${item.price}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={onIncreaseCount}>
                <Icon name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDecreaseCount}>
                <Icon name="remove" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onRemoveFromCart}>
                <Icon name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row", // Arrange items horizontally
    padding: 15,
    // marginTop: 5,
    borderWidth: 1,
    borderColor: "#dddd",
    borderRadius: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
});
