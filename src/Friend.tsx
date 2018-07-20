import * as React from 'react';
import { friendFragment } from './__generated__/types';

export class Friend extends React.Component<{ friend: friendFragment }> {
  render () {
    const { name, appearsIn } = this.props.friend;
    return (
      <div>
        <p>{name}</p>
        <p>{appearsIn}</p>
      </div>
    );
  }
}
