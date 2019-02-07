import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import gql from 'config/gql';
import i18n from './i18n';
import Routes from 'Routes';

import 'common/bulma.module.scss';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <ApolloProvider client={gql}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </I18nextProvider>
);

export default App;
