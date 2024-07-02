/* eslint-disable prettier/prettier */
import * as React from 'react';
import HomePage from '../screens/home';
import RegisterScreen from '../screens/register';
import MerChantScreen from '../screens/merchantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function NavigateScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{statusBarColor: 'lightgreen', headerShown: false}}
        />
        <Stack.Screen
          name="Register Page"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Merchant Details"
          options={{headerShown: false}}
          component={MerChantScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}