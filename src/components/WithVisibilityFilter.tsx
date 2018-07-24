import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

export class WithVisibilityFitler extends React.Component<{
  children: (props: any) => React.ReactNode;
}> {
  render() {
    return (
      <Query query={GET_VISIBILITY_FILTER}>
        {({ data }) => this.props.children(data.visibilityFilter)}
      </Query>
    );
  }
}
