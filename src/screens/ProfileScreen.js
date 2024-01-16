// ProfileScreen.js
<<<<<<< HEAD
// import React, { useState } from 'react';
// import { View, Text, Input, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Header from '../components/Header';

// const ProfileScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Xử lý logic đăng nhập tại đây
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Sau khi xử lý đăng nhập, bạn có thể chuyển hướng đến màn hình chính hoặc làm gì đó khác
//   }
//   return (
//     <View>
//       <Header title="SHOPPE" />
//       <View style={styles.container}>
//        <Text style={styles.title}>Đăng Nhập</Text>
//       <Input
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       <Input
//         placeholder="Mật khẩu"
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <Button title="Đăng Nhập" onPress={handleLogin} />
//       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.linkText}>Chưa có tài khoản? Đăng ký ngay!</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };
// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   linkText: {
//     marginTop: 20,
//     textAlign: 'center',
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });
// export default ProfileScreen;
// Import các thư viện và component cần thiết
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Auth/RegisterScreen';
import LoginScreen from './Auth/LoginScreen';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,     
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
=======
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Icon name="person" size={30} color="#000" />
    </View>
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7
  );
};

export default ProfileScreen;
