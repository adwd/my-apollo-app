import gql from 'graphql-tag';

export const FriendFragment = gql`
  fragment friend on Character {
    id
    name
    appearsIn
  }
`;
