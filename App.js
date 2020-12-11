import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {TabNavigator} from './components/TabNavigator';
import { AppDrawer } from './components/AppDrawer';

export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen,
  },
  Sidebar:{
    screen:AppDrawer,
  }
}) 

const AppContainer = createAppContainer(SwitchNavigator);