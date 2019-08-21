import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { Router } from 'react-router-dom';

import history from 'utils/history';
import client from 'api/Client';

import Routes from './Routes';
import './App.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
