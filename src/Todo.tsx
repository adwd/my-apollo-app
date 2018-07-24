import * as React from 'react';
import { TodoFragment } from './__generated__/types';

export class Todo extends React.Component<{ todo: TodoFragment }> {
  render() {
    const { text, done } = this.props.todo;
    return (
      <div>
        <p>{text}</p>
        <p>{done}</p>
      </div>
    );
  }
}
