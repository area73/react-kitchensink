import React from 'react';
import GUser from '../gUser/GUser.js';
import PropTypes from 'prop-types';

class GUsers extends React.PureComponent {
  render() {
    return this.props.userList.map((item, idx) => <GUser key={idx} userType={this.props.userType} userRef={item}/>);
  }
}

GUsers.propTypes = {
  /** Some description here */
  userList: PropTypes.array.isRequired,
  /** This is use for Storybook documentation */
  userType: PropTypes.string,
};

GUsers.defaultProps = {
  userType: 'user',
};




export default GUsers;


