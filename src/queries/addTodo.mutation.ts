import gql from 'graphql-tag';
import { TodoFragment } from './todo.fragment';

export const AddTodoMutation = gql`
  mutation addTodo($text: String!, $done: Boolean!) {
    createTodo(data: { text: $text, done: $done }) {
      ...todoFragment
    }
  }
  ${TodoFragment}
`;
