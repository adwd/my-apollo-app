import gql from 'graphql-tag';
import { TodoFragment } from './todo.fragment';

export const GetTodosQuery = gql`
  query getTodos {
    todoes {
      ...todoFragment
    }
  }
  ${TodoFragment}
`;
