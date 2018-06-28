import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://api.githunt.com/graphql"
});

client
  .query({
    query: gql`
      {
        feed(type: HOT, limit: 5) {
          repository {
            owner {
              login
            }
            name
          }
          postedBy {
            login
          }
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
