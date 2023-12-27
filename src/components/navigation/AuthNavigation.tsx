import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from './routes';

import Home from '../screens/Home';
import ClockSkia from '../screens/Clock';
import RestrictedBox from '../screens/RestrictedBox';

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.home} component={Home} />
        <Stack.Screen name={routes.clockSkia} component={ClockSkia} />
        <Stack.Screen name={routes.restrictedBox} component={RestrictedBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
