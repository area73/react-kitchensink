import React from 'react';
import renderer from 'react-test-renderer';
import FollowingFollowerApp from './FollowingFollowerApp.js';


describe('FollowingFollower', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FollowingFollowerApp/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
