import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Query } from 'react-apollo';
import { GetTodosQuery } from './queries/getTodos';
import { GetTodos } from './__generated__/types';
import { Todo } from './Todo';

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
        <Query<GetTodos> query={GetTodosQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            if (!data) return <div>no data</div>;

            return data.todoes.map(todo => (
              <Todo todo={todo!} key={todo!.id} />
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default App;
