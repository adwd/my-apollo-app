import gql from 'graphql-tag';

export const FriendFragment = gql`
  fragment Friend on Character {
    id
    name
    appearsIn
  }
`;
