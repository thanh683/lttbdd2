// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { decreaseCount, increaseCount, removeFromCart } from '../Cart/cartSlice';
// // import { decreaseCount, increaseCount, removeFromCart } from './cartSlice';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   const totalItems = cartItems.reduce((total, item) => total + item.count, 0);
//   const total = cartItems.reduce((totalPrice, item) => totalPrice + item.count * (item.price - item.discount), 0);

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItemContainer}>
//       <Image style={styles.itemImage} source={{ uri: item.photo }} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={() => dispatch(decreaseCount({ id: item.id }))}>
//             <Text style={styles.quantityButton}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{item.count}</Text>
//           <TouchableOpacity onPress={() => dispatch(increaseCount({ id: item.id }))}>
//             <Text style={styles.quantityButton}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.itemPriceContainer}>
//         <Text style={styles.itemPrice}>${(item.price - item.discount).toFixed(2)}</Text>
//         <Text style={styles.discountText}>Giảm: ${item.discount.toFixed(2)}</Text>
//         <TouchableOpacity onPress={() => dispatch(removeFromCart({ id: item.id }))}>
//           <Text style={styles.removeButton}>XÓA</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderCartItem}
//       />
//       {/* Additional components for the total and discount */}
//       <View style={styles.totalContainer}>
//         <Text style={styles.totalItems}>Tổng số sản phẩm: {totalItems}</Text>
//         <Text style={styles.totalPrice}>Total: ${total.toFixed(2)}</Text>
//       </View>
//       {/* Additional components for discounts and payment options */}
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   cartItemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 8,
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 4,
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 8,
//   },
//   itemTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   quantityButton: {
//     fontSize: 20,
//     paddingHorizontal: 8,
//     color: 'blue',
//   },
//   quantityText: {
//     fontSize: 18,
//     marginHorizontal: 8,
//   },
//   itemPriceContainer: {
//     alignItems: 'flex-end',
//   },
//   itemPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   discountText: {
//     fontSize: 14,
//     color: 'grey',
//   },
//   removeButton: {
//     color: 'red',
//     marginTop: 8,
//   },
//   totalContainer: {
//     marginTop: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingTop: 8,
//   },
//   totalItems: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   totalPrice: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// };

// export default Cart;
// ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

const Cart = () => {
  return (
    <View>
      <Header title="SHOPPE" />
      <Text style={{ marginTop: 150 }}>CartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCartCart</Text>
      <Icon name="person" size={30} color="#000" />
    </View>
  );
};

export default Cart;
