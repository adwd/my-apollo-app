import * as React from 'react';
import { Mutation } from 'react-apollo';
import { AddTodoMutation } from '../queries/addTodo.mutation';
import { GetTodosQuery } from '../queries/getTodos.query';
import { addTodo, addTodoVariables, getTodos } from '../__generated__/types';

export class AddTodo extends React.Component {
  textInput: HTMLInputElement;
  doneInput: HTMLInputElement;

  render() {
    return (
      <Mutation<addTodo, addTodoVariables>
        mutation={AddTodoMutation}
        update={(cache, { data }) => {
          const cached = cache.readQuery<getTodos>({ query: GetTodosQuery });
          cache.writeQuery({
            query: GetTodosQuery,
            data: { todoes: cached!.todoes.concat([data!.createTodo]) },
          });
        }}
      >
        {(addTodo, { data }) => (
          <div>
            <p>add todo</p>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({
                  variables: {
                    text: this.textInput.value,
                    done: this.doneInput.checked,
                  },
                });
                this.textInput.value = '';
              }}
            >
              <input
                ref={node => {
                  this.textInput = node!;
                }}
              />
              <input
                type="checkbox"
                ref={node => {
                  this.doneInput = node!;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
