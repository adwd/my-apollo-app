import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';

export type Filter = 'All' | 'OnlyDone' | 'ExceptDone';

export class VisibilityFilterButton extends React.Component<
  { filter: Filter } & React.ClassAttributes<HTMLButtonElement>
> {
  render() {
    const { filter, children } = this.props;
    return (
      <ApolloConsumer>
        {client => (
          <button
            onClick={() =>
              client.writeData({ data: { visibilityFilter: filter } })
            }
          >
            {children}
          </button>
        )}
      </ApolloConsumer>
    );
  }
}
