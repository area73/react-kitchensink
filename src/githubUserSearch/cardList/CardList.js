import React from 'react';
import Card from '../card/Card.js';

import styles from './card-list.module.scss';


const CardList = (props) => {
  // const updateValue = props.update || 0;
  return (
    <div className={styles['card-list']} align="left">
      {props.profiles.map(item => <Card update={props.update} key={item.id}{...item}/>)}
    </div>
  );
};

export default CardList;
