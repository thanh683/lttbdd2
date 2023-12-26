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
