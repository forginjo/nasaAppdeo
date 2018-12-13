import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';
import Login from './source/components/login';
import Register from './source/components/register';




import RegisterLogin from './source/RegisterLogin/RegisterLogin';



const Home = createStackNavigator(
  {
    Feed: RegisterLogin,
    Login:Login,
    Register: Register,
   
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);


export default createAppContainer(Home);


