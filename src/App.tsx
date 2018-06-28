import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Query
          query={gql`
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
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.feed.map((data: any) => (
              <div key={data.postedBy.login}>
                <p>{`${data.repository.owner.login}: ${data.repository.name}`}</p>
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default App;
