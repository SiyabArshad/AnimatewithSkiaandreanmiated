import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import ThemeProvider from './src/Context/ThemeProvider';

import AuthNavigation from './src/components/navigation/AuthNavigation';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider>
        <AuthNavigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
