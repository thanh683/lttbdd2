// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const { item } = action.payload;
//       const existingItemIndex = state.items.findIndex((i) => i.id === item.id);
//       if (existingItemIndex === -1) {
//         state.items.push({ ...item, count: 1 });
//       } else {
//         state.items[existingItemIndex].count++;
//       }

//       // Lưu giỏ hàng vào AsyncStorage
//       AsyncStorage.setItem('cart', JSON.stringify(state.items));
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);

//       // Xóa giỏ hàng khỏi AsyncStorage
//       AsyncStorage.removeItem('cart');

//       // Lưu giỏ hàng mới vào AsyncStorage
//       AsyncStorage.setItem('cart', JSON.stringify(state.items));
//     },
//     increaseCount: (state, action) => {
//       state.items = state.items.map((item) => {
//         if (item.id === action.payload.id) {
//           item.count++;
//         }
//         return item;
//       });

//       // Lưu giỏ hàng mới vào AsyncStorage
//       AsyncStorage.setItem('cart', JSON.stringify(state.items));
//     },
//     decreaseCount: (state, action) => {
//       state.items = state.items.map((item) => {
//         if (item.id === action.payload.id && item.count > 1) {
//           item.count--;
//         }
//         return item;
//       });

//       // Lưu giỏ hàng mới vào AsyncStorage
//       AsyncStorage.setItem('cart', JSON.stringify(state.items));
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   increaseCount,
//   decreaseCount
// } = cartSlice.actions;
// export default cartSlice.reducer;
