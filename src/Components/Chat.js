import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser } from '../actions/postActions';
import { Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chatroom from './Chatroom';
import Defaultchatroom from './Defaultchatroom';
import { LoadingScreen, CustomizedProgressBars } from './LoadingScreen';
import './Sidebar.css';
import { socket } from './Signin';
const { api } = require('../endpoints/API');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }

  componentWillMount() {}
  componentDidUpdate() {}
  componentDidMount() {
    if (this.props.admin === undefined) return <Redirect to="/" />;

    fetch(`${api}/api/users`, {
      method: 'GET',
      headers: {
        'x-auth-token': `${this.props.admin.token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {});

    socket.on('userdata', (data) => {
      this.props.getAllUser(data);
    });
  }

  render() {
    if (this.props.admin === undefined) return <Redirect to="/" />;
    return this.props.users === undefined ? (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <LoadingScreen />
          <CustomizedProgressBars />
        </div>{' '}
      </div>
    ) : (
      <div className="chatwindow">
        <Sidebar
          obj={this.props.users}
          name={this.props.admin.username}
          id={this.props.admin._id}
          profile={this.props.admin.url}
        />
        {this.props.chats !== undefined ? (
          <Chatroom chat={this.props.chats} phone={this.props.admin.phone} />
        ) : (
          <Defaultchatroom />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userchat.user,
  admin: state.userchat.admin_id,
  chats: state.chats.chat,
});

export default connect(mapStateToProps, {
  getAllUser,
})(Chat);
