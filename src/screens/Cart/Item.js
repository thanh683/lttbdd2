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
    <View style={styles.imageContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: productDetail?.image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );

  return (
    <View>
      {productDetail != null ? (
        <View style={styles.itemContainer}>
          {renderImage()}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Text style={{ fontSize:17 }}>
                 ${item.price} x {item.count} = ${item.price * item.count}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={onIncreaseCount}>
                <Icon name="add" size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDecreaseCount}>
                <Icon name="remove" size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onRemoveFromCart}>
                <Icon name="delete" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    marginRight: 10,
  },
  imageWrapper: {
    borderRadius: 20, // Bán kính bo tròn (đặt là một giá trị lớn để hình ảnh trở nên bo tròn)
    borderColor: "#FFA500",
    borderWidth: 2, // Độ dày viền đỏ
    overflow: "hidden", // Ẩn phần hình ảnh vượt ra khỏi khung
  },
  productImage: {
    width: 100, // Điều chỉnh kích thước hình ảnh theo ý muốn
    height: 100,
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
