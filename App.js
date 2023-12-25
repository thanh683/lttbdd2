// App.js

import React from 'react';
import { View } from 'react-native';
import Menu from './src/components/Menu';
import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';
// import store from './src/Cart/store';

export default function App() {
  return (
    // <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Menu />
        </NavigationContainer>
      </View> 
    // </Provider>
    
  );
}
