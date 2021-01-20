import React from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from './constants/theme';

import HomeScreen from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
