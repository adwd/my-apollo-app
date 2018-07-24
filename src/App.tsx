import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Query } from 'react-apollo';
import { GetTodosQuery } from './queries/getTodos.query';
import { getTodos } from './__generated__/types';
import { Todo } from './components/Todo';
import { AddTodo } from './components/AddTodo';
import { VisibilityFilterButton } from './components/VisibilityFilterButton';
import { WithVisibilityFitler } from './components/WithVisibilityFilter';

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
        <WithVisibilityFitler>
          {visibility => (
            <Query<getTodos> query={GetTodosQuery}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                if (!data) return <div>no data</div>;

                return data.todoes
                  .filter(todo => {
                    switch (visibility) {
                      case 'OnlyDone':
                        return todo!.done;
                      case 'ExceptDone':
                        return !todo!.done;
                      default:
                        return true;
                    }
                  })
                  .map(todo => <Todo todo={todo!} key={todo!.id} />);
              }}
            </Query>
          )}
        </WithVisibilityFitler>
        <AddTodo />
        <VisibilityFilterButton filter="All">all</VisibilityFilterButton>
        <VisibilityFilterButton filter="OnlyDone">
          only done
        </VisibilityFilterButton>
        <VisibilityFilterButton filter="ExceptDone">
          except done
        </VisibilityFilterButton>
      </div>
    );
  }
}

export default App;
