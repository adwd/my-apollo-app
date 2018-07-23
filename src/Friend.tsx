import * as React from 'react';
import { FriendFragment } from './__generated__/types';

export class Friend extends React.Component<{ friend: FriendFragment }> {
  render() {
    const { name, appearsIn } = this.props.friend;
    return (
      <div>
        <p>{name}</p>
        <p>{appearsIn}</p>
      </div>
    );
  }
}
