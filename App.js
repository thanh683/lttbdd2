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
