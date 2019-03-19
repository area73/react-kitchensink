import React from 'react';

import style from './GUser.module.scss';
import PropTypes from 'prop-types';


function GUser({userRef, userType} = {userRef:{}, userType:'user'}) {
  return (
    <div className={style[userType] || style.GUser}>
      <img alt="user" src={userRef.avatar_url}/>
    </div>);
}


GUser.propTypes = {
  /** Some description here */
  userRef: PropTypes.object.isRequired,
  /** This is use for Storybook documentation */
  userType: PropTypes.string,
};

GUser.defaultProps = {
  userType: 'user',
};

export default GUser;
