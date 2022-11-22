import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IrrigationHistoryScreen from "./screens/irrigationHistoryScreen/IrrigationHistoryScreen";
import ChartScreen from "./screens/chartScreen/ChartScreen";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const TabTheme = {
  dark: false,
  colors: {
    primary: '#00A455',
    background: 'rgb(255, 255, 255)',
    card: '#FCFCFC',
    text: 'rgb(28, 28, 30)',
    border: 'none',
    notification: 'rgb(255, 69, 58)',
  },
  borderRadius: 20
};

export default function App() {
  return (
          <NavigationContainer theme={TabTheme}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Info" component={ChartScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
