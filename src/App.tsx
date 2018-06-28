import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Query } from 'react-apollo';
import { GetHero } from './queries';
import { GetHeroQuery } from './__generated__/types';

class HeroQuery extends Query<GetHeroQuery> {}

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
        <HeroQuery query={GetHero}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            if (!data || !data.hero || !data.hero.friends)
              return <div>no data</div>;

            return data.hero.friends.map(friend => (
              <div key={friend!.name}>
                <p>{`${friend!.name}(${friend!.appearsIn})`}</p>
              </div>
            ));
          }}
        </HeroQuery>
      </div>
    );
  }
}

export default App;
