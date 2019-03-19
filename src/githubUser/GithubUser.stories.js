import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../styles/main.scss';

import mdInfo from './githubUser.md';

// import {action} from '@storybook/addon-actions';
import Avatar from './Avatar.js';
import styles from './avatar.module.scss';

const stories = storiesOf('GitHub User', module);

stories.add('default', () => (
  <Avatar
    url="https://avatars1.githubusercontent.com/u/2030605?v=4"
    classes={`${styles.avatar} ${styles['--circle']}`}
  />
), {mdInfo});

stories.add('modifiers', () => (
  <div className="o-layout o-layout--center">
    <div className="o-layout__item u-1/3">
      <Avatar
        url="https://avatars1.githubusercontent.com/u/2030605?v=4"
        classes={`${styles.avatar} ${styles['--square']}`}
      />
    </div>
    <div className="o-layout__item u-1/3">
      <Avatar
        url="https://avatars1.githubusercontent.com/u/2030605?v=4"
        classes={`${styles.avatar} ${styles['--circle']}`}
      />
    </div>
    <div className="o-layout__item u-1/3">
      <Avatar
        url="https://avatars1.githubusercontent.com/u/2030605?v=4"
        classes={`${styles.avatar} ${styles['--rounded']}`}
      />
    </div>
    <div className="o-layout__item u-1/3">
      <Avatar
        url="https://avatars1.githubusercontent.com/u/2030605?v=4"
        classes={`${styles.avatar} ${styles['--border']}`}
      />
    </div>
    <div className="o-layout__item u-1/3">
      <Avatar
        url="https://avatars1.githubusercontent.com/u/2030605?v=4"
        classes={`${styles.avatar} ${styles['--user']}  ${styles['--border']}`}
      />
    </div>
  </div>
), {mdInfo});
