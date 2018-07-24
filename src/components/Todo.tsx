import * as React from 'react';
import { todoFragment } from '../__generated__/types';

export class Todo extends React.Component<{ todo: todoFragment }> {
  render() {
    const { text, done } = this.props.todo;
    return (
      <div>
        <p>
          {text} {done ? 'done' : 'not done'}
        </p>
      </div>
    );
  }
}
