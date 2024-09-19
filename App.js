import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {StatusBar} from "expo-status-bar";

import Navigation from "./src/components/Navigation";
import {AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();

function App() {
  return (
      <AuthProvider>
          <StatusBar backgroundColor="#ffffff" />
          <Navigation />
      </AuthProvider>
  );
}

export default App;
