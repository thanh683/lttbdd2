<<<<<<< HEAD
// App.js

import React from 'react';
import { View } from 'react-native';
import Menu from './src/components/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
// import store from './src/Cart/store';

export default function App() {
  return (
    // <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Nội dung hiện tại của bạn */}
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Menu />
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
    // </Provider>
    
  );
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Content from './src/components/Content';
import Menu from './src/components/Menu';  // Make sure to import Menu

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Menu />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   text: {
//     color: 'red',
//   },
// });
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7
