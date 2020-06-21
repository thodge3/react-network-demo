import React from 'react';
import { HomePage, Network, Navbar } from '../components';
import { AppProvider } from './AppProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <AppProvider>
      <Navbar />
      <Router>
        <Route path='/' exact component={ HomePage } />
        <Route path='/network' exact component={ Network } />
      </Router>
    </AppProvider>
  )
}


export default App;
