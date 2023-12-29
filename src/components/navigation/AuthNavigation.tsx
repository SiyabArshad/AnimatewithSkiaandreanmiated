import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from './routes';

import Home from '../screens/Home';
import ClockSkia from '../screens/Clock';
import RestrictedBox from '../screens/RestrictedBox';
import PrespectiveMenu from '../screens/PrespectiveMenu';
import OnBoarding from '../screens/OnBoarding';
import ZoominOut from '../screens/ZoominOut';

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
        <Stack.Screen
          name={routes.prespectiveMenu}
          component={PrespectiveMenu}
        />
        <Stack.Screen name={routes.onBoarding} component={OnBoarding} />
        <Stack.Screen name={routes.zoominOut} component={ZoominOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
