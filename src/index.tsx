import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { fragmentMatcher } from './__generated__/fragmentTypes';

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache,
  uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
