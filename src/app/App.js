import React from 'react';
import { HomePage } from '../components';
import { AppProvider } from './AppProvider';

function App () {

  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}


export default App;
