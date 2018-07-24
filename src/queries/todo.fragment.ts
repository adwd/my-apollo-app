import gql from 'graphql-tag';

export const TodoFragment = gql`
  fragment todoFragment on Todo {
    id
    text
    done
  }
`;
