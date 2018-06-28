import gql from 'graphql-tag';

export const GetHero = gql`
  query GetHero {
    hero {
      name
      friends {
        name
        appearsIn
      }
    }
  }
`;
