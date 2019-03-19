import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  return (
    <div className={props.classes}>
      <img alt="avatar" src={props.url}/>
    </div>
  );
};

Avatar.propTypes = {
  /** The URL from were the image comes */
  url: PropTypes.string,
  /** The classes to be appy to the avatar */
  classes: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Avatar.defaultProps = {
  url: 'http://',
  classes: 'avatar',
  width: 75,
  height: 75,
};

export default Avatar;
