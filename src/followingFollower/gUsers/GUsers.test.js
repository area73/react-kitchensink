import React from 'react';
import renderer from 'react-test-renderer';
import GUsers from './GUsers.js';

const userType = 'followers';
const userList = [
  {
    'login': 'd-asensio',
    'id': 13970905,
    'node_id': 'MDQ6VXNlcjEzOTcwOTA1',
    'avatar_url': 'https://avatars2.githubusercontent.com/u/13970905?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/d-asensio',
    'html_url': 'https://github.com/d-asensio',
    'followers_url': 'https://api.github.com/users/d-asensio/followers',
    'following_url': 'https://api.github.com/users/d-asensio/following{/other_user}',
    'gists_url': 'https://api.github.com/users/d-asensio/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/d-asensio/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/d-asensio/subscriptions',
    'organizations_url': 'https://api.github.com/users/d-asensio/orgs',
    'repos_url': 'https://api.github.com/users/d-asensio/repos',
    'events_url': 'https://api.github.com/users/d-asensio/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/d-asensio/received_events',
    'type': 'User',
    'site_admin': false,
  },
  {
    'login': 'ana-gamito',
    'id': 26737579,
    'node_id': 'MDQ6VXNlcjI2NzM3NTc5',
    'avatar_url': 'https://avatars3.githubusercontent.com/u/26737579?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/ana-gamito',
    'html_url': 'https://github.com/ana-gamito',
    'followers_url': 'https://api.github.com/users/ana-gamito/followers',
    'following_url': 'https://api.github.com/users/ana-gamito/following{/other_user}',
    'gists_url': 'https://api.github.com/users/ana-gamito/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/ana-gamito/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/ana-gamito/subscriptions',
    'organizations_url': 'https://api.github.com/users/ana-gamito/orgs',
    'repos_url': 'https://api.github.com/users/ana-gamito/repos',
    'events_url': 'https://api.github.com/users/ana-gamito/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/ana-gamito/received_events',
    'type': 'User',
    'site_admin': false,
  },
  {
    'login': 'fernandopasik',
    'id': 1301335,
    'node_id': 'MDQ6VXNlcjEzMDEzMzU=',
    'avatar_url': 'https://avatars1.githubusercontent.com/u/1301335?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/fernandopasik',
    'html_url': 'https://github.com/fernandopasik',
    'followers_url': 'https://api.github.com/users/fernandopasik/followers',
    'following_url': 'https://api.github.com/users/fernandopasik/following{/other_user}',
    'gists_url': 'https://api.github.com/users/fernandopasik/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/fernandopasik/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/fernandopasik/subscriptions',
    'organizations_url': 'https://api.github.com/users/fernandopasik/orgs',
    'repos_url': 'https://api.github.com/users/fernandopasik/repos',
    'events_url': 'https://api.github.com/users/fernandopasik/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/fernandopasik/received_events',
    'type': 'User',
    'site_admin': false,
  },
  {
    'login': 'alexponfe',
    'id': 5236721,
    'node_id': 'MDQ6VXNlcjUyMzY3MjE=',
    'avatar_url': 'https://avatars3.githubusercontent.com/u/5236721?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/alexponfe',
    'html_url': 'https://github.com/alexponfe',
    'followers_url': 'https://api.github.com/users/alexponfe/followers',
    'following_url': 'https://api.github.com/users/alexponfe/following{/other_user}',
    'gists_url': 'https://api.github.com/users/alexponfe/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/alexponfe/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/alexponfe/subscriptions',
    'organizations_url': 'https://api.github.com/users/alexponfe/orgs',
    'repos_url': 'https://api.github.com/users/alexponfe/repos',
    'events_url': 'https://api.github.com/users/alexponfe/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/alexponfe/received_events',
    'type': 'User',
    'site_admin': false,
  },
];

describe('GUsers', () => {
  it('renders correctly a list of users', () => {
    const tree = renderer.create(<GUsers userType={userType} userList={userList}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
