import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import Router from './app/Router';

const theme = {
  colors: {
    primary: 'yellow'
  },
  Button: {
    titleStyle: {
      color: 'red',
    }
  },
};
const AppContainer = createAppContainer(Router);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;