import React from 'react';

import card from './card.module.scss';
import GUser from '../../followingFollower/gUser/GUser.js';

class Card extends React.Component {

  removeEl = el => ev => {
    ev.preventDefault();
    return this.props.update(el);
  };

  render() {
    const data = this.props;
    return (
      <div className={card.card}>
        <GUser userRef={{avatar_url:data.avatar_url}}/>
        <div className={card.info}>
          <div className={card.subtract}><a href="" onClick={this.removeEl(data.id)}>X</a></div>
          <div className={card.name}>{data.name}</div>
          <div className={card.company}>{data.company}</div>
        </div>

        <div>URL: {data.html_url}</div>
        <div>followers: {data.followers_url}</div>

      </div>
    );
  }
}

export default Card;
