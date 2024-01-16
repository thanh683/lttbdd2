<<<<<<< HEAD
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Cart from '../screens/Cart';
import MenuScreen from '../screens/MenuScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Details" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#AAAAAA',
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-heart" size={35} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="AlertTab"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="bell-ring" size={35} color={color} />
          ),
          tabBarLabel: 'Alert',
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-plus" size={35} color={color} />
          ),
          tabBarLabel: 'Favorite',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-heart" size={35} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default Menu;
=======
// Menu.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import Cart from "../screens/Cart";
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Ẩn tiêu đề trên cùng của màn hình
          tabBarLabel: () => null, // Ẩn tên dưới icon cho tất cả các màn hình
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="menu" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={35} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;
>>>>>>> a35083f5ab38f2741a4552ebe1c6dcc9552d6bf7
