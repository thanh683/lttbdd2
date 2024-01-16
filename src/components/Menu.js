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