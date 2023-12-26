import React from 'react';

import ThemeProvider from './src/Context/ThemeProvider';

import AuthNavigation from './src/components/navigation/AuthNavigation';
export default function App() {
  return (
    <ThemeProvider>
      <AuthNavigation />
    </ThemeProvider>
  );
}
