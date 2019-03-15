import React from 'react';
import GUsers from './gUsers/GUsers';
import GUser from './gUser/GUser';

class FollowingFollowerApp extends React.Component {

  state = {
    inputValue: '',
    ready: false,
    user: {
      followers: [{a: 'a'}, {b: 'b'}],
      following: [],
      data: {},
    },
  };

  changeInputVal = ev => this.setState({inputValue: ev.target.value});
  setInputStatus = (/*ev*/) => this.setState({ready: false});
  setSearchStatus = (/*ev*/) => this.setState({ready: true});

  shouldComponentUpdate(nextProps, nextState /*nextContext*/) {
    !this.state.ready
    && nextState.ready
    && (nextState.inputValue === this.state.inputValue)
    && this.renderUserList(this.state.inputValue);
    return true;
  }

  renderUserList = user => {
    // debugger;
    this.fetchAsync(user).then(data => {
      this.setState(() =>
        ({
          user: {
            followers: data.followers,
            following: data.following,
            data: data.userData,
          },
        }));
    }).catch(err => <div> {err} :: NO USER FOUND</div>);
  };

  renderParse() {
    return (
      <div className="o-layout o-layout--center">
        <div>
          <GUsers userType="following" userList={this.state.user.following}/>
        </div>
        <div>
          <GUser userType="user" userRef={this.state.user.data}/>
        </div>
        <div>
          <GUsers userType="followers" userList={this.state.user.followers}/>
        </div>
      </div>);
  }

  fetchAsync = async (user) => {
    // await response of fetch call
    const baseUrl = `https://api.github.com/users/${user}`;
    //const baseUrl = `http://localhost:7007/users/${user}`;
    const userData = await fetch(baseUrl);
    const followers = await fetch(baseUrl + '/followers');
    const following = await fetch(baseUrl + '/following');

    const queries = async () => ({
      userData: await userData.json(),
      followers: await followers.json(),
      following: await following.json(),
    });

    return userData.status === 200
      ? await queries()
      : Promise.reject(userData);
  };

  // {this.state.ready && this.renderUserList(this.state.inputValue)}
  render() {
    return (
      <div>
        <h1>Following & Followers</h1>
        <input
          placeholder="type a user"
          onBlur={this.setSearchStatus}
          onFocus={this.setInputStatus}
          onChange={this.changeInputVal}
          value={this.state.inputValue}/>
        {this.renderParse()}

      </div>

    );

  }
}

export default FollowingFollowerApp;
