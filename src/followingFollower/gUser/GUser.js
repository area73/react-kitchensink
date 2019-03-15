import React from 'react';

import style from './GUser.module.scss';

class GUser extends React.PureComponent {

  render() {
    return (
      <div className={style[this.props.userType] || style.GUser}>
        <img alt="user"  src={this.props.userRef && this.props.userRef.avatar_url}/>
      </div>);
  }

}

export default GUser;
