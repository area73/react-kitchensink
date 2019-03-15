import React from 'react';
import GUser from '../gUser/GUser.js';


class GUsers extends React.PureComponent {
  render() {
    return this.props.userList.map((item, idx) => <GUser key={idx} userType={this.props.userType} userRef={item}/>);
  }
}

export default GUsers;


