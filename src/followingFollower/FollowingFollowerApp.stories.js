import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../styles/main.scss';


import mdInfo from './FollowingFollowerApp.md';
import FollowingFollowerApp from './FollowingFollowerApp';

const stories = storiesOf('GitHub Following / Followers', module);

stories.add('Application', () => (
  <FollowingFollowerApp />
), {mdInfo});

