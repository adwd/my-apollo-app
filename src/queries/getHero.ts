import gql from 'graphql-tag';
import { FriendFragment } from './friend.fragment';

export const GetHero = gql`
  query GetHero {
    hero {
      name
      friends {
        ...friend
      }
    }
  }
  ${FriendFragment}
`;
